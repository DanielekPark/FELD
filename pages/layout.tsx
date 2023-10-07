import type { NextPage } from "next";
import Image from "next/image";
import bdlayout from "/public/images/bdlayouts.png";
import grid from "/public/images/grid.gif";
import flex from "/public/images/flex.gif";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Searchbar from "../components/searchbar";
import Link from "next/link";

//PAGE TO DISPLAY LINKS TO LAYOUT GENERATORS AND CODE SNIPPETS
const Layout: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tool Finder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-4 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Layouts</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Layout generators and code snippets
            </p>
            <Searchbar />
          </div>
        </div>
      </div>
      <div className="relative pt-10 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Demos
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              {/* relative */}
              <div className="flex-shrink-0 mx-auto">
                <Image src={grid} alt="pattern" width={150} height={150} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  <p className="text-sm font-medium text-blue-600 mt-auto">
                    <Link
                      href="https://cssgr.id/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Try it
                    </Link>
                  </p>
                </div>
                {/* absolute */}
                <div className="mt-3 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      CSS grid generator, tinker and quickly build a grid
                      layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              {/* relative */}
              <div className="flex-shrink-0 mx-auto">
                <Image src={flex} alt="pattern" width={150} height={150} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  <p className="text-sm font-medium text-blue-600 mt-auto">
                    <Link
                      href="https://angrytools.com/css-flex/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Try it
                    </Link>
                  </p>
                </div>
                {/* absolute */}
                <div className="mt-3 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      A tool to build a flexbox layout seconds or pick a pre existing layout and customize it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              {/* relative */}
              <div className="flex-shrink-0 mx-auto">
                <Image src={bdlayout} alt="pattern" width={150} height={150} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  <p className="text-sm font-medium text-blue-600 mt-auto">
                    <Link
                      href="https://layout.bradwoods.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Try it
                    </Link>
                  </p>
                </div>
                {/* absolute */}
                <div className="mt-3 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Premade layouts and customizable snippets of HTML and CSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
