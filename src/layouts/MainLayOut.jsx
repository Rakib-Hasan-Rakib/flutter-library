import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { FiMenu } from "react-icons/fi";
import SideLinks from "../components/sidebar/SideLinks";
import SideLinksDown from "../components/sidebar/SideLinksDown";


const MainLayOut = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-4 py-4">
          {/* Page content here */}
          <Navbar />
{/* <Outlet///  */}
<Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <FiMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <SideLinks/>
          {/* <SideLinksDown/>/ */}
        </div>
      </div>
    </>
  );
};
export default MainLayOut;
