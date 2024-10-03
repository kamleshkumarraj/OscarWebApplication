import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { },
  build: {
    rollupOptions: {
      external: ['@emotion/react/jsx-runtime']
    }
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
});
