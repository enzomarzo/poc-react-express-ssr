import express from "express";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App.jsx";

const app = express();
app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3001;
const aemUrl =
  "http://localhost:4502/content/arrow-dxp/language-masters/en/home.html";

const renderReactApp = async (location, productId = null) => {
  const aemAuth = {
    Authorization: "Basic " + Buffer.from("admin:admin").toString("base64"),
  };

  const fetchHtml = async (url, headers) => {
    const response = await fetch(url, { headers });
    return response.text();
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const aemHomeHtml = await fetchHtml(aemUrl, aemAuth);

  const productDetails = productId
    ? await fetchJson(`https://api.escuelajs.co/api/v1/products/${productId}`)
    : null;

  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App productId={productId} productDetails={productDetails} />
    </StaticRouter>
  );

  const reactHtml = aemHomeHtml.replace(
    '<div id="spa-root"></div>',
    `<div id="root">${reactApp}</div>
    <script>window.__INITIAL_DATA__ = ${JSON.stringify({
      productId,
      productDetails,
    })};</script>`
  );

  return reactHtml.replace(
    "<body",
    '<script defer src="/static/client.js"></script></body'
  );
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
