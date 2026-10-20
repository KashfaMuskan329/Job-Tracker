// Simple build step: copies static assets into dist/
const fs = require("fs");
fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
fs.copyFileSync("index.html", "dist/index.html");
console.log("Build complete: dist/");
