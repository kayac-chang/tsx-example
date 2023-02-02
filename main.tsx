import express from "express";
import ReactDOMServer from "react-dom/server";

express()
  .get("/", (_, res) => {
    const html = ReactDOMServer.renderToString(
      <html>
        <head>
          <title>SSR Example</title>
        </head>
        <body>
          <div id="root">Hello, Server Side Rendering!</div>
        </body>
      </html>
    );
    res.send(html);
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
