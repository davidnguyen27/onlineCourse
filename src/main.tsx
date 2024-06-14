import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "antd/dist/reset.css";
import "./styles/index.css";
import { SiderProvider } from "./app/context/SiderContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { NightModeProvider } from "./app/context/NightModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <NightModeProvider>
          <SiderProvider>
            <App />
          </SiderProvider>
        </NightModeProvider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);
