/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
}

interface ViteEnv {
  VITE_API_URL: string;
}

export default function ViteEnv(): Plugin;
