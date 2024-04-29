import NavSearch from "./NavSearch";
import NavButtons from "./NavButtons";

const Navbar = () => {
  return (
    <>
      <div className="flex lg:justify-between items-center">
        <NavSearch />
        <div className="hidden lg:block">
          <NavButtons />
        </div>
      </div>
    </>
  );
};
export default Navbar;
