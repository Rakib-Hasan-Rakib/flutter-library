import NavSearch from "./NavSearch";
import NavButtons from "./NavButtons";



const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <NavSearch/>
        <NavButtons/>
      </div>
    </>
  );
};
export default Navbar;
