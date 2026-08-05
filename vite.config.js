import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Deployed at https://yeswanth-24.github.io (user site) -> base "/"
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
