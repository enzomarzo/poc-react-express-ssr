import express from "express";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App.jsx";
import fs from "fs";

const app = express();
app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3001;

const createReactApp = async (location) => {
    const reactApp = ReactDOMServer.renderToString(
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    );
    const html = await fs.promises.readFile(`${__dirname}/index.html`, "utf-8");
    const reactHtml = html.replace(
        '<div id="root"></div>',
        `<div id="root">${reactApp}</div>`  
    );
    return reactHtml;
  };

app.get("*", async (req, res) => {
  const indexHtml = await createReactApp(req.url);
  res.status(200).send(indexHtml);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

