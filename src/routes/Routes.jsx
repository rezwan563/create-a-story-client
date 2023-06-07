import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-slate-400 text-5xl">Hello world!</div>,
  },
]);

export default router;