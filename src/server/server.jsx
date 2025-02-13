/* eslint-disable indent */
import express from "express";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App.jsx";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import christmasTheme from "../themes/christmasTheme";
import { CacheProvider } from "@emotion/react";

import React from "react";

const app = express();
app.use("/static", express.static(__dirname));
const PORT = process.env.PORT || 3001;
const aemUrl =
  "http://localhost:4502/content/arrow-dxp/language-masters/en/home.html";

const renderReactApp = async (location, productId = null) => {
  const emotionCache = createEmotionCache();
  let errorMsg = null;
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(emotionCache);

  const aemAuth = {
    Authorization: "Basic " + Buffer.from("admin:admin").toString("base64"),
  };

  const fetchHtml = async (url, headers) => {
    try {
      const response = await fetch(url, { headers });
      return response.text();
    } catch (error) {
      errorMsg = "Please start AEM locally on port 4502 to proceed";
    }
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const aemHomeHtml = await fetchHtml(aemUrl, aemAuth);

  let productDetails = productId
    ? await fetchJson(`https://api.escuelajs.co/api/v1/products/${productId}`)
    : null;

  if (productDetails && productDetails.name === "EntityNotFoundError") {
    const products = await fetchJson("https://api.escuelajs.co/api/v1/products");
    const randomProductIds = products.slice(0, 10).map((product) => product.id);
    const randomProductId = randomProductIds[Math.floor(Math.random() * randomProductIds.length)];
    productDetails = await fetchJson(`https://api.escuelajs.co/api/v1/products/${randomProductId}`);
  }

  const reactApp = ReactDOMServer.renderToString(
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={christmasTheme}>
          <StaticRouter location={location}>
            <App productId={productId} productDetails={productDetails} />
          </StaticRouter>
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>
  );

  // Extract the CSS
  const emotionChunks = extractCriticalToChunks(reactApp);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const reactHtml =
    aemHomeHtml &&
    aemHomeHtml
      .replace("</head>", `<style>${emotionCss}</style></head>`)
      .replace("<body", '<script defer src="/static/client.js"></script></body')
      .replace(
        '<div id="spa-root"></div>',
        `<div id="root">${reactApp}</div>
    <script>window.__INITIAL_DATA__ = ${JSON.stringify({
      productId,
      productDetails,
    })};</script>`
      );

  if (errorMsg) return errorMsg;

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
