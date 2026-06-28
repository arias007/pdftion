import esbuild from "esbuild";

const prod = process.argv[2] === "production";

await esbuild.build({
  bundle: true,
  entryPoints: ["src/main.ts"],
  external: ["obsidian"],
  format: "cjs",
  loader: {
    ".otf": "base64"
  },
  logLevel: "info",
  minify: prod,
  outfile: "main.js",
  platform: "browser",
  sourcemap: prod ? false : "inline",
  target: "es2022",
  treeShaking: true
});
