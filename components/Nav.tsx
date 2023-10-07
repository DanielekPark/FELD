import Link from "next/link";
import React, { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="bg-sky-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          href="/"
          className="font-semibold text-xl tracking-tight cursor-pointer"
        >
          Tool Finder
        </Link>
      </div>
      <div className="mt-2 flex items-center space-x-4 overflow-y-auto whitespace-nowrap">
        <Link
          href="/layout"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Layout
        </Link>
        <Link
          href="/image"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Image tools
        </Link>
        <Link
          href="/fedesigntools"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Dev design
        </Link>
        <Link
          href="/git"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Git
        </Link>
        <Link
          href="/html"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          HTML
        </Link>
        <Link
          href="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
