import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/index",
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);
