This is a Local AI Agent with Azure OpenAI LLM Model.

## Getting Started

### Install dependencies

```bash
bun install
```

### Setup .env

```bash
cp .env.example .env.local
```

Plese edit .env.local

### Run app

```bash
bun run dev
```

Open [http://localhost:3123](http://localhost:3123) with your browser to see the result.

## Use Langfuse

You can keep past records by linking Langfuse. -> [Github](https://github.com/langfuse/langfuse)

### Clone repository

```bash
git clone git@github.com:langfuse/langfuse.git
```

### Start docker container

```bash
cd langfuse
docker compose up -d
```

Sign up for Langfuse and create a project.\
After that, set the secret and public keys in `.env.local`.
