import express from "express";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App.jsx";
import fs from "fs";

const app = express();
app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3001;

const renderReactApp = async (location, productId = null) => {
  const aemHomeHtml = await fetch(
    "http://localhost:4502/content/arrow-dxp/language-masters/en/home.html",
    {
      headers: {
        Authorization: "Basic " + Buffer.from("admin:admin").toString("base64"),
      },
    }
  ).then((res) => res.text());

  const productDetails = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`).then(res => res.json());

  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App productId={productId} productDetails={productDetails}/>
    </StaticRouter>
  );

  const reactHtml = aemHomeHtml.replace(
    '<div id="spa-root"></div>',
    `<div id="root">${reactApp}</div>`
  );
  return reactHtml;
};

app.get("/", async (req, res) => {
  const indexHtml = await renderReactApp(req.url);
  res.status(200).send(indexHtml);
});

app.get("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const indexHtml = await renderReactApp(req.url, productId);  
  res.status(200).send(indexHtml);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
