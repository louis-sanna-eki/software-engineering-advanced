import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { materialLight } from "@uiw/codemirror-theme-material";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import styles from "./cleanreset.module.css";
import remarkGfm from "remark-gfm";

export default function CodingExercise({
  initCode = "",
  lesson = "",
  correction = "",
}) {
  const [code, setCode] = useState(initCode);
  const [isGrading, setIsGrading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    setIsGrading(true);
    const response = await fetch("/api/grade", {
      method: "POST",
      body: JSON.stringify({ code, lesson, correction }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    setFeedback(result.feedback);
    setIsGrading(false);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        padding: "20px",
        backgroundColor: "#ffffff",
        color: "#333333",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333333" }}>
        Python Code Exercise
      </h2>
      <CodeMirror
        value={code}
        height="600px"
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        theme={materialLight}
        style={{ marginBottom: "20px" }}
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "20px",
        }}
        disabled={isGrading}
      >
        {isGrading ? "Grading..." : "Submit" }
      </button>
      {feedback && (
        <div
          style={{
            backgroundColor: "#f8f9fa",
            color: "#333333",
            padding: "15px",
            borderRadius: "4px",
            border: "1px solid #dee2e6",
            whiteSpace: "pre-wrap",
          }}
        >
          <div className={styles.cleanslate}>
            <Markdown>
              {feedback}
            </Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
