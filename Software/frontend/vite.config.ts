import { defineConfig, loadEnv } from 'vite';
import { compression } from 'vite-plugin-compression2'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      compression({
        deleteOriginalAssets: true,
      }),
      preact()
    ],
    server: {
      proxy: {
        '/api': env.PROXY_HOST ?? 'http://192.168.4.1',
      },
    },
    build: {
      outDir: "../data",
      emptyOutDir: true,
    },
  }
});
