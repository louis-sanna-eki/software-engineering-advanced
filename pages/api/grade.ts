// import { OpenAI } from 'openai'

export default async function handler(req, res) {
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  // const { code, lesson, correction } = req.body

  // const completion = await openai.chat.completions.create({
  //   model: "gpt-4o-mini",
  //   messages: [
  //     { role: "system", content: `You are a Python code reviewer. Grade the student code out of 100 and provide feedback.` },
  //     { role: "user", content: lesson, name: "teacher" },
  //     { role: "user", content: correction, name: "teacher" },
  //     { role: "user", content: code, name: "student" }
  //   ],
  // })

  // res.status(200).json({ feedback: completion.choices[0].message.content })
  res.status(200).json({ feedback: "Hello grade!" });
}