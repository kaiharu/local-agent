import { createAzure } from "@ai-sdk/azure";
import { smoothStream, streamText } from "ai";

const azure = createAzure({
  resourceName: process.env.AZURE_RESOURCE_NAME,
  apiVersion: process.env.OPENAI_API_VERSION,
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  fetch: async (url, options) => {
    if (!options) return await fetch(url, options);
    const body = options.body;
    if (body) {
      const parsed = JSON.parse(body as string);
      delete parsed.temperature;
      options.body = JSON.stringify(parsed);
    }

    return await fetch(url, options);
  },
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: azure.chat(process.env.AZURE_DEVELOPMENT_NAME ?? "gtp-4o"),
    messages,
    experimental_transform: smoothStream(),
    experimental_telemetry: { isEnabled: true },
  });

  return result.toDataStreamResponse();
}
