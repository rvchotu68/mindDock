# **MindDock**

**MindDock** is an AI-powered workspace that allows users to interact with their own data from multiple sources through natural conversations. It helps organize, search, and extract insights from information using AI.

## Why did I build it ?

I built **MindDock** to gain hands-on experience with the core concepts behind modern AI applications. Through this project, I wanted to:

- Learn how AI agent workflows are designed and orchestrated.
- Understand how Retrieval-Augmented Generation (RAG) works.
- Explore techniques for ingesting and processing data from multiple sources, including Markdown files, text documents, YouTube videos, and websites.
- Learn how to use memory effectively to provide grounded responses, reduce hallucinations, and optimize token usage.

## Features

## Tech Stack

### FrontEnd

- nextJS
- tailwind
- zustand
- typescript
- shadcnui
- tanstack query

### Backend

- express
- zod
- cloudinary
- typescript
- prisma
- tavily
- inngest
- fireCrawl

### AI

- openai

### Data

- postGres
- vectorDB(Pinecone)

### Authentication

- better-auth

## Getting started

## Folder structure

### Frontend

### Backend

- src
  - index.ts
- .env
- .env.local
- package.json
- tsconfig.json

## Setup

### **Backend**

**typescript setup**

- npm i -D typescript @types/node @types/express tsx
- npx tsc --init (for creating the tsconfig.json)

```bash
{
  "compilerOptions": {
    /* Language */
    "target": "ES2022",
    "lib": ["ES2022"],

    /* Modules */
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    /* Project structure */
    "rootDir": "./src",
    "outDir": "./dist",

    /* Type checking */
    "strict": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Interoperability */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Node */
    "types": ["node"],

    /* Output */
    //"sourceMap": true,
    //"declaration": true,
    //"declarationMap": true,

    /* Performance */
    "skipLibCheck": true,

    /* Consistency */
    "forceConsistentCasingInFileNames": true,

    /* Build */
    "incremental": true
  },

  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}

```

- ts related scripts in package.json:
  1. "dev" : "tsx watch src/index.ts"
  2. "build" : "tsc"
  3. "start" : "node dis/index.js"

**prisma setup**

- npm i @primsa/clinet prisma @prisma/adapter-pg pg
- npx prisma init
- npx prisma generate
- npx primsa migrate dev --name migration_name(for development use)

### **Frontend**

**nextjs setup**

- npx create-next-app@latest .

**shadcn**
npx shadcn@latest init --preset b3vYhM4MBU --template next --pointer

npx shadcn@latest add and press "a" to select all components and enter

## patterns used

- Environment Configuration Validation Pattern / Schema-based environment validation for env variables (env.ts)
- Singleton pattern for prisma client (db.ts)

## Roadmap

## what I learned

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
