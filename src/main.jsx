import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import A11yChecklist from "./pages/A11yChecklist";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/a11y-checklist", element: <A11yChecklist /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
