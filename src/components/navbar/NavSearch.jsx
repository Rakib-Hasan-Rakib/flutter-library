import { CiSearch } from "react-icons/ci";



const NavSearch = () => {
  return (
    <>
      <div className="basis-1/2 relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="outline-none rounded-full pl-10 px-3 py-2 bg-gray-200 w-2/4"
        />
        <CiSearch
          size={22}
          className="absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer"
        />
      </div>
    </>
  );
};
export default NavSearch;
