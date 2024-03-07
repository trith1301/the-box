import { createBrowserRouter } from "react-router-dom"

import Root from "./layout"
import NotFound from "./components/pages/NotFound"
import Home from "./components/pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

export default router
