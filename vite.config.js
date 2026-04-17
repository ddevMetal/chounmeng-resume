import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: '/'                    → user site:    https://ddevmetal.github.io
// base: '/chounmeng-resume/'   → project site: https://ddevmetal.github.io/chounmeng-resume/
export default defineConfig({
  plugins: [react()],
  base: '/chounmeng-resume/',
});
