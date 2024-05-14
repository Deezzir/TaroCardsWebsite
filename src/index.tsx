import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { Block1 } from "./pages/landing/blocks/block1/block1";
import { MyRouter } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<MyRouter />);

reportWebVitals();
