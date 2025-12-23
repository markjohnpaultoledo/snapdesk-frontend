import sirv from "sirv";
import http from "http";

const PORT = process.env.PORT || 8080;

// Serve static files from Vite build
const serve = sirv("build", {
  single: true,   // SPA fallback
  dev: false,
});

http
  .createServer((req, res) => {
    serve(req, res);
  })
  .listen(PORT, () => {
    console.log(`Vite app running on port ${PORT}`);
  });
