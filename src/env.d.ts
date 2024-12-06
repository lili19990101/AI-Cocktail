/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


interface ImportMetaEnv {
    readonly env: {
        OPENAI_API_KEY: string;
        OPENAI_BASE_URL: string;
        OPENAI_MODEL: string;
        OPENAI_TEMPERATURE: number;
        OPENAI_MAX_TOKENS: number;
      };
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }