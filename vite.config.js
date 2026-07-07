import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: '/'                    → user site / custom domain
// base: '/chounmeng-resume/'   → project site: https://ddevmetal.github.io/chounmeng-resume/
export default defineConfig({
  plugins: [react()],
  base: '/',
});
