import React from "react";
import ReactDOM from "react-dom";
import BlockPanel from "./ui/panels/BlockPanel";
import store from "./store/store";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BlockPanel />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
