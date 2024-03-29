import { Home, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mode, setMode] = useState();
  const [query, setQuery] = useState();
  let location = useLocation();

  let changeTheme = () => {
    if (mode == "dark") {
      document.documentElement.classList.remove("dark");
      setMode("");
    } else {
      document.documentElement.classList.add("dark");
      setMode("dark");
    }
  };

  const getQuery = (e) => {
    setQuery(e.target.value);
  }
  return (
    <div className="sticky left-0 top-0 right-0 flex justify-between items-center px-10 bg-white/50 dark:bg-white/10 backdrop-blur-sm h-14 w-full">
      <div className="flex gap-4 items-center">
        <Link to={"/"}><Home
          className="text-slate-800 dark:text-slate-300 cursor-pointer"
        /></Link>
        <Link to={`/show/${query}`} onClick={() => location.reload()}><Search className="cursor-pointer text-slate-800 dark:text-slate-300" /></Link>
        <input
          type="text"
          className="rounded-full outline-none px-4 py-2 w-[100%] placeholder:text-slate-600 dark:placeholder:text-slate-400 text-slate-800 dark:text-slate-300 bg-white dark:bg-black drop-shadow-2xl"
          placeholder="search song"
          onChange={getQuery}
        />
      </div>
      <div className="flex gap-4 items-center">
        <Link to={"/user"}>
          <img
            src="https://img.freepik.com/premium-photo/man-wearing-glasses-is-smiling-holding-tablet_905510-2118.jpg?w=740"
            alt="alex"
            className="rounded-full h-8 w-8 cursor-pointer"
          />
        </Link>
        {mode == "dark" ? (
          <Moon
            className="cursor-pointer text-slate-300"
            onClick={changeTheme}
          />
        ) : (
          <Sun
            className="cursor-pointer text-slate-800"
            onClick={changeTheme}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
