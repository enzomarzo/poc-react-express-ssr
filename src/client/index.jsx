import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import christmasTheme from '../themes/christmasTheme';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache.js';

const emotionCache = createEmotionCache();

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={christmasTheme}>
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
