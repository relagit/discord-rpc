import { defineConfig } from "@relagit/vite";

export default defineConfig({
    entrypoints: {
        plugin: "src/plugin.ts",
        native: "src/native.ts",
    },
});
