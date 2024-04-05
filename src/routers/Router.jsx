import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";

const Router = createBrowserRouter([{ path: "/", element: <MainLayOut /> }]);
export default Router;
