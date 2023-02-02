import express from "express";
import ReactDOMServer from "react-dom/server";
import path from "path";
import { App } from "./client";

express()
  // serve client side code
  .use(express.static(path.resolve(__dirname, "dist")))

  // serve index.html
  .get("/", (_, res) => {
    const html = ReactDOMServer.renderToString(
      <html>
        <head>
          <title>SSR Example</title>
        </head>
        <body>
          <div id="root">
            <App />
          </div>
          <script src="bundle.js"></script>
        </body>
      </html>
    );
    res.send(html);
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
