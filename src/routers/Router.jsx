import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Discover from "../pages/discover/Discover";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [{ path: "/", element: <Discover /> }],
  },
]);
export default Router;
