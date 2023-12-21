import { ArrowLeft, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className="bg-brand-blue flex h-[15svh] items-center justify-between px-6">
      <ArrowLeft />
      <h1 className="font-semibold">Todo List</h1>
      <div className="relative">
        <Menu onClick={() => setIsMenuVisible((prev) => !prev)} />
        <nav
          className={`absolute right-0 top-[100%] ${
            isMenuVisible ? "block" : "hidden"
          }`}
        >
          <ul className="border-brand-black rounded-lg border">
            <li className="hover:bg-brand-black/5 px-2 py-1">
              <Link to={"/"}> Home</Link>
            </li>
            <li className="hover:bg-brand-black/5 px-2 py-1">
              <Link to={"/about"}> About</Link>
            </li>
            <li className="hover:bg-brand-black/5 px-2 py-1">
              <Link to={"/contact"}> Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
