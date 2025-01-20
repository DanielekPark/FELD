import Link from "next/link";
import React, { FC, useState } from "react";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-400 p-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-xl tracking-tight cursor-pointer text-white"
        >
          Tool Finder
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="md:hidden ml-3 text-white rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon */}
          <svg
            className={`${isOpen ? 'hidden' : '' } w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {/* X icon */}
          <svg
            className={`${isOpen ? '' : 'hidden' }  w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:w-auto md:block`}
          id="mobile-menu"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                href="/layout"
                className="text-white  md:hover:bg-transparent block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Layout
              </Link>
            </li>
            <li>
              <Link
                href="/fedesigntools"
                className="text-white  md:hover:bg-transparent block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Design Tools
              </Link>
            </li>
            <li>
              <Link
                href="/git"
                className="text-white  md:hover:bg-transparent block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Git
              </Link>
            </li>
            <li>
              <Link
                href="/imgtools"
                className="text-white  md:hover:bg-transparent block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Image tools
              </Link>
            </li>
            <li>
              <Link
                href="/html"
                className="text-white  md:hover:bg-transparent block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                HTML
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white  md:hover:bg-transparent block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
