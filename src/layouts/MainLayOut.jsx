import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { FiMenu } from "react-icons/fi";
import SideLinks from "../components/sidebar/SideLinks";
import NavButtons from "../components/navbar/NavButtons";

const MainLayOut = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-4 py-4">
          <div className="lg:hidden flex justify-between items-center">
            <label htmlFor="my-drawer-2" className="drawer-button">
              <FiMenu size={28} />
            </label>
            <NavButtons />
          </div>
          <Navbar />
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <SideLinks />
        </div>
      </div>
    </>
  );
};
export default MainLayOut;
