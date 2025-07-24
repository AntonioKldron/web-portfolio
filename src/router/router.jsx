import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App.jsx";

export const router = createBrowserRouter([
  {
    path: "/index",
    children: [
      {
        index: true,
        element: 
        <><App /><App /></>,
      },
    ],
  },
]);
