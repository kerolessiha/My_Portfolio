import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-[80%] px-4 md:px-8  m-auto mt-2 rounded-md">
        <div className="md:h-20 sm:h-64   mx-auto container flex items-center justify-between flex-wrap">
          {/* Logo */}
          <div className="text-indigo-500 md:order-1">
            <Link to="Home">
              <span className="text-3xl">KERO</span>siha
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <i className="fa-solid fa-bars text-2xl fa-shake"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`w-full md:w-auto md:order-2 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row font-semibold md:justify-between">
              <li className="md:px-4 md:py-2 text-xl">
                <NavLink to="Home">Home</NavLink>
              </li>
              <li className="md:px-4 md:py-2 hover:text-indigo-400 text-xl">
                <NavLink to="About">About</NavLink>
              </li>
              <li className="md:px-4 md:py-2 hover:text-indigo-400 text-xl">
                <NavLink to="Projects">Projects</NavLink>
              </li>
              <li className="md:px-4 md:py-2 hover:text-indigo-400 text-xl">
                <NavLink to="Skills">Skills</NavLink>
              </li>
            </ul>
          </div>

          {/* GitHub Button */}
          <div className="order-2 md:order-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <span>
                <a
                  href="https://github.com/kerolessiha"
                  className="text-xl"
                  target="_blank"
                >
                  <i className="fab fa-github mr-1"></i>
                  GitHub
                </a>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
