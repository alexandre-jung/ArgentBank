/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import paths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), paths()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
