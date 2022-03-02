import Image from "next/image";
import Link from "next/link";

export default function Sandbox() {
  return (
    <div className="min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12">
      {/* TODO insert background image here */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "></div>
      <div className="relative mb-4 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="max-w-md mx-auto">
          <ul>
            <li>
              <Image
                src="/images/close_black_24dp.svg"
                className="h-6"
                alt="Tailwind Play"
                height="30"
                width="30"
              />
            </li>
            <li>Bryson Meiling</li>
            <li>
              <Image
                src="/images/settings_black_24dp.svg"
                className="h-6"
                alt="Tailwind Play"
                height="30"
                width="30"
              />
            </li>
          </ul>

          <div className="divide-y divide-gray-300/50">
            <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
              <p>
                An advanced online playground for Tailwind CSS, including
                support for things like:
              </p>

              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-8 text-base leading-7 font-semibold">
              <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Read the docs &rarr;
                </a>
              </p>
              <p>more stuff</p>
              <p>more stuff</p>
              <p>more stuff</p>
              <p>more stuff</p>
              <p>more stuff</p>
              <p>more stuff</p>
              <p>more stuff</p>
              <p>more stuff</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer-div-ok"
        className="fixed bottom-0 inset-x-0 px-6 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10"
      >
        <footer className="bottom-0 sticky ">
          <nav className="fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm text-blue-900 uppercase font-mono relative">
            <a
              href="#"
              className="w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300"
            >
              <Image
                src="/images/view_list_black_24dp.svg"
                width={32}
                height={32}
                alt="Transaction List"
              />
            </a>

            <Link href="/add">
              <a className="w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800">
                <Image
                  src="/images/add_black_24dp.svg"
                  width={32}
                  height={32}
                  alt="Add new expense"
                />
              </a>
            </Link>

            <a
              href="#"
              className="w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800"
            >
              <Image
                src="/images/expand_less_black_24dp.svg"
                width={32}
                height={32}
                alt="See more"
              />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
