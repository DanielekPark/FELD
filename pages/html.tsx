import type { NextPage } from "next";
import Image from "next/image";
import htmlreference from "/public/images/htmlreference.png";
import table from "/public/images/table.png";
import htmlgen from "/public/images/htmlgen.png";
import metatags from "/public/images/metatags.png";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Searchbar from "../components/searchbar";
import Link from "next/link";

const htmlTools = [
  {
    name: "HTML Reference",
    img: htmlreference,
    details:
      "Free guide to html. It features all elements and attributes. See experimental, meta, inline, and block elements.",
    link: "https://htmlreference.io/",
  },
  {
    name: "Tableizer",
    img: table,
    details:
      "A quick spreadsheets-to-html<table> tool. Paste cells from Excel, Google Docs, or another spreadsheet.",
    link: "https://tableizer.journalistopia.com/",
  },
  {
    name: "HTML Table Generator	",
    img: htmlgen,
    details: "Use this HTML Table Generator to create tables on the fly.",
    link: "https://www.quackit.com/html/html_table_generator.cfm",
  },
  {
    name: "Meta Tags",
    img: metatags,
    details:
      "Tool to debug and generate meta tag code for any website. With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter.",
    link: "https://metatags.io/",
  },
];

//HTML RESOURCES
const HTML: NextPage = () => {
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
              <span className="block xl:inline">HTML</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              HTML cheatsheets and generators
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
            {htmlTools.map((item) => {
              const { name, img, details, link } = item;
              return (
                <div
                  key={name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  {/* relative */}
                  <div className="flex-shrink-0 mx-auto">
                    <Image src={img} alt="pattern" width={150} height={150} />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col">
                      <p className="text-sm font-medium text-blue-600 mt-auto">
                        <Link
                          href={link}
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
                          {details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML;
