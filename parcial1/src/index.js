import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = navigator.language.split(/[-_]/)[0];
console.log(language);

const root = document.getElementById("root");

if (language === "es") {
    createRoot(root).render(
      <IntlProvider locale="es" messages={localeEsMessages}>
        <App />
      </IntlProvider>
    );
} else {
    createRoot(root).render(
      <IntlProvider locale="en"  messages={localeEnMessages}>
        <App />
      </IntlProvider>
    );
}
