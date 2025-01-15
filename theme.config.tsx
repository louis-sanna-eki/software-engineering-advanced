import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Advanced Software Engineering</span>,
  project: {
    link: 'https://github.com/louis-sanna-eki/software-engineering-advanced',
  },
  docsRepositoryBase: 'https://github.com/louis-sanna-eki/software-engineering-advanced',
  footer: {
    text: 'Advanced Software Engineering Principles',
  },
  head: (
    <>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚙️</text></svg>"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Advanced Software Engineering" />
      <meta property="og:description" content="A guide to advanced software engineering principles and patterns" />
    </>
  ),
}

export default config
