const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ["daterangepicker.js", "daterangepicker.css"],
        bundle: true,
        outdir: "./dist",
        external: ["jquery", "moment"],
        target: "es2019",
        minify: true,
        format: "cjs",
        outExtension: { ".js": ".min.js", ".css": ".min.css" },
    })
    .catch(() => process.exit(1));
