import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Das Plugin muss importiert werden!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Hier wird es aktiviert
  ],
});