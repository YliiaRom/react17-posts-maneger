// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { router } from "./app/router/router";
// import { RouterProvider } from "react-router";

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./app/router/router";
import { RouterProvider } from "react-router";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { AppInit } from "./app/init/AppInit";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppInit />
    <RouterProvider router={router} />
  </Provider>
);
