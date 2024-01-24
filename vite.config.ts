import { defineConfig } from "vite";

import { builtinModules } from "node:module";

export default defineConfig({
    build: {
        target: "esnext",
        outDir: "dist",
        emptyOutDir: true,
        lib: {
            entry: ["src/plugin.ts", "src/native.ts"],
            formats: ["es"],
            fileName: (_, name) => `${name}.js`,
        },
        rollupOptions: {
            external: builtinModules.concat("relagit:actions", "node:crypto", "node:fs", "node:path", "node:events", "node:net"),
        },
    },
});
