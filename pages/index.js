import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  add_new_transaction,
  get_all_transactions,
  get_date_ranged_transaction,
  get_all_categories,
  quick_keys_check,
  execute_db_function,
} from "../components/database";
import React, { useState, useEffect } from "react";
const USERNAME_KEY = "username";

export default function Home(props) {
  let build_time = new Date(props.buildTimestamp);
  const [username, setUsername] = useState("User");

  useEffect(() => {
    let default_name =
      localStorage.getItem(USERNAME_KEY) === null
        ? "User"
        : localStorage.getItem(USERNAME_KEY);
    setUsername(default_name);
  }, []);

  return (
    <>
      <Head>
        <title key="">Budget App 2.0</title>
      </Head>
      <div className="bg-cover min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "></div>
        <div className="relative mb-4 px-6 pt-10 pb-8 bg-[#F3F5F7] shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md mx-auto">
            <dialog
              id="profile-dialog"
              className="transition duration-150 ease-in-out rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <form>
                <div className="grid place-items-center">
                  <input
                    type="text"
                    placeholder="Username"
                    className="text-xl font-normal bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={username}
                    onChange={(e) => {
                      localStorage.setItem(USERNAME_KEY, e.target.value);
                      setUsername(e.target.value);
                    }}
                  ></input>
                </div>
                <menu className="grid place-items-center">
                  <button
                    className="m-4 place-self-center bg-emerald-400 hover:bg-gradient-to-l from-emerald-500 via-pink-700 to-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    id="confirmBtn"
                    value="default"
                  >
                    Done
                  </button>
                </menu>
              </form>
            </dialog>

            <div className="flex justify-between">
              <div className="flex justify-start gap-x-6">
                <div>
                  <div
                    className="relative block bg-white rounded shadow p-2"
                    onClick={() => {
                      document.getElementById("profile-dialog").showModal();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="fill-black dark:fill-white"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="relative block p-2">
                    <p className="text-base text-slate-500">Welcome</p>
                    <p className="text-2xl text-bold text-black">{username}</p>
                  </div>
                </div>
              </div>

              <div>
                <Link href="/settings">
                  <a>
                    <div className="relative block bg-white rounded shadow p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        className="fill-black dark:fill-white"
                      >
                        <rect fill="none" height="24" width="24" />
                        <path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z" />
                      </svg>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="divide-y divide-gray-300/50">
              <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>

                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-8 text-base leading-7 font-semibold">
                <p className="text-gray-900">
                  Want to dig deeper into Tailwind?
                </p>
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
              <Link href="/">
                <a className="w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300">
                  <Image
                    src="/images/view_list_black_24dp.svg"
                    width={32}
                    height={32}
                    alt="Transaction List"
                  />
                </a>
              </Link>

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

              <Link href="/">
                <a className="w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800">
                  <Image
                    src="/images/expand_less_black_24dp.svg"
                    width={32}
                    height={32}
                    alt="See more"
                  />
                </a>
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now(),
    },
  };
};

async function handle_click() {
  console.log("getting records");
  if (!quick_keys_check()) {
    console.log("keys not present");
  }
  let records = await execute_db_function(get_all_transactions);
  console.log("got the records", records);
  if (records != null && records.length > 0) {
    document.getElementById("records").innerText = `okay: ${records}`;
  } else {
    document.getElementById("records").innerText = "error getting records";
  }
}
