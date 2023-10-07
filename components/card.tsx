import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  link: string;
  details: string;
};

const Card: React.FC<Props> = ({ name, link, details }: Props) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {details}
      </p>
      <Link
        href={link}
        legacyBehavior
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-400 rounded-lg"
        target="_blank"
        rel="noreferrer"
      >
        Try it
      </Link>
    </div>
  );
};

export default Card;
