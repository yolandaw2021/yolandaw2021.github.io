import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Home from "./home";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);