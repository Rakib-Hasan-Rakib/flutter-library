import { Link, NavLink } from "react-router-dom";
import { TbWorld, TbDeviceTabletHeart } from "react-icons/tb";
import {
  MdOutlineSmartphone,
  MdOutlineScreenshotMonitor,
} from "react-icons/md";
import { FaCode, FaUserGroup } from "react-icons/fa6";

const SideLinks = () => {
  return (
    <>
      <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
        <li>
          <NavLink to="/">
            <TbWorld /> Discover
          </NavLink>
        </li>
        <li>
          <NavLink to="/uikits">
            <MdOutlineSmartphone /> UI Kits
          </NavLink>
        </li>
        <li>
          <NavLink to="/screens">
            <MdOutlineScreenshotMonitor /> Screens
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">
            <FaCode /> Articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsor">
            <TbDeviceTabletHeart /> Become Sponsor
          </NavLink>
        </li>
        <li>
          <NavLink to="/hiredev">
            <FaUserGroup /> Hire Flutter Dev
          </NavLink>
        </li>
        <li>
          <p className="mt-2 font-semibold cursor-default">All Screens</p>
          <ul>
            <li>
              <Link className="flex justify-between">
                Sign In <span>10</span>
              </Link>
            </li>
            <li>
              <Link className="flex justify-between">
                Chat <span>5</span>
              </Link>
            </li>
            <li>
              <Link className="flex justify-between">
                Onboarding <span>18</span>
              </Link>
            </li>
            <li>
              <Link className="flex justify-between">
                E-commerce <span>9</span>
              </Link>
            </li>
            <li>
              <Link className="flex justify-between">
                Checkout <span>10</span>
              </Link>
            </li>
            <li>
              <Link className="flex justify-between">
                Error <span>16</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default SideLinks;
