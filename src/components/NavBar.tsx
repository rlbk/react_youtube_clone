import { useEffect, useRef, useState } from "react";
import { changeSearchTerm, clearSelectedVideo } from "../store";
import { useAppDispatch } from "../store/hooks";
import { FaYoutube } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { logoutHandler } from "../utils/helpers/localStorage";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const menuContainer = useRef(null);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onFormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeSearchTerm(searchTerm));
    dispatch(clearSelectedVideo());
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!showMenu) return;

      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [showMenu]);

  return (
    <div className="h-20 border-b border-slate-300 flex  items-center justify-between px-8">
      <div
        onClick={() => {
          dispatch(clearSelectedVideo());
          dispatch(changeSearchTerm(""));
          setSearchTerm("");
        }}
        className="flex gap-2 items-center font-bold text-xl outline-none cursor-pointer"
      >
        <FaYoutube size={26} className="text-red-600" />
        <span>YouTube</span>
      </div>
      <form onSubmit={onFormSubmitHandler} className=" flex items-center">
        <div className="border border-slate-500 border-solid p-2 pl-6 rounded-s-full   border-r-0 overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={onInputChangeHandler}
            placeholder="Search"
            className="border-none bg-transparent outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-200 hover:bg-slate-300  p-2  px-4 border  border-slate-500 border-solid rounded-e-full outline-none"
        >
          <FaSearch size={24} />
        </button>
      </form>

      <div ref={menuContainer} className="relative">
        <CgProfile
          onClick={() => setShowMenu((prevState) => !prevState)}
          size={30}
          className="cursor-pointer hover:bg-slate-300 rounded-full p-1 transition-all duration-500 ease-in-out"
        />
        <div
          className={` pt-3 pb-2 bg-white text-primary-blue-900 ${
            showMenu ? "block absolute" : "hidden"
          } dropDownProfileMenu`}
        >
          <p
            className=" py-2  font-medium px-5  cursor-pointer hover:bg-primary-gray-150"
            onClick={() => {
              logoutHandler();
              navigate("/login");
            }}
          >
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
