import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="h-[70vh] max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Questions? Suggestions?
        </h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl">
          Have a suggestion for a link? If you are the owner of a site or if a
          link is broken please contact me and I will remove it.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="https://github.com/DanielekPark"
              className="text-blue-600/100 font-bold text-lg"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/daniel-park-70878119a/"
              className="text-blue-600/100 font-bold text-lg "
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>
          <div>
            <Link
              href="mailto:daniel.ek.park@gmail.com"
              className="text-blue-600/100 font-bold text-lg "
              rel="noreferrer"
              target="_blank"
            >
              Gmail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
