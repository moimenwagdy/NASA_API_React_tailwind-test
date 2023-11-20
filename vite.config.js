import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/NASA_API_React_tailwind-test/",
  plugins: [react()],
});
