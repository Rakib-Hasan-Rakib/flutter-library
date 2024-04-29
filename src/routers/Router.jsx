import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Discover from "../pages/discover/Discover";
import UnderDevelopment from "../components/UnderDevelopment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Discover /> },
      { path: "uikits", element: <UnderDevelopment /> },
      { path: "screens", element: <UnderDevelopment /> },
      { path: "articles", element: <UnderDevelopment /> },
      { path: "sponsor", element: <UnderDevelopment /> },
      { path: "hiredev", element: <UnderDevelopment /> },
    ],
  },
]);
export default Router;
