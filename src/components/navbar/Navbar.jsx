import { TbBrightnessUp } from "react-icons/tb";
import NavSearch from "./NavSearch";



const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <NavSearch/>
        <div className="flex items-center space-x-4">
            <button><TbBrightnessUp size={32}/></button>
          <button className="border border-gray-200 px-3 py-2 rounded-xl">
            Log in
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-xl">
            Get Pro
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
