import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // or use 'true' to listen on all addresses
    port: 5173, // default Vite port, you can change this
  },
});
