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
        ? "Your Name"
        : localStorage.getItem(USERNAME_KEY);
    setUsername(default_name);
  }, []);

  return (
    <>
      <Head>
        <title key="">Budget App 2.0</title>
      </Head>
      <div className="bg-cover h-screen grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12">
        <div className="absolute inset-0 theme-gradient bg-center "></div>
        <div className="relative mb-4 px-6 pt-10 pb-8 bg-[#F3F5F7] shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between">
              <div className="flex justify-start gap-x-6">
                <div>
                  <div className="relative block p-2">
                    <p className="text-base text-slate-500 pl-6">Welcome</p>
                    <input
                      className="text-2xl text-bold text-black bg-transparent hover:theme-gradient hover:opacity-75 rounded-xl pl-6"
                      onChange={(e) => {
                        setUsername(e.target.value);
                        // TODO keep a user from deleting their username?
                        if (e.target.value === "") {
                          localStorage.setItem(USERNAME_KEY, "Your Name");
                        } else {
                          localStorage.setItem(USERNAME_KEY, e.target.value);
                        }
                      }}
                      value={username}
                    />
                  </div>
                </div>
              </div>

              <div>
                <Link href="/settings">
                  <a>
                    <div className="relative block bg-white rounded-2xl shadow p-2">
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

            <div className="divide-gray-300/50">
              <div className="flex py-8 text-base leading-7 space-y-6 text-white">
                <div className="flex-1 theme-gradient rounded-2xl justify-center my-4 p-4 ">
                  <div>Today&apos;s Budget</div>
                  <div id="total-number" className="text-bold text-xl">
                    $25.32
                  </div>
                  <div className="flex">
                    <div className="flex-1">Some figure</div>
                    <div className="flex-1">Another Fact</div>
                  </div>
                </div>
              </div>
              <div className="pt-8 text-base leading-7 font-semibold">
                <p className="text-gray-900 text-lg">Transactions</p>
                <div className="flex flex-row bg-white rounded-lg my-2 p-4">
                  <div className="flex-none mr-2">Icon</div>
                  <div className="flex-1 mx-4">Bought this</div>
                  <div className="flex-initial">$36.21</div>
                </div>
                <div className="flex flex-row bg-white rounded-lg my-2 p-4">
                  <div className="flex-none mr-2">Icon</div>
                  <div className="flex-1 mx-4">Shoes</div>
                  <div className="flex-initial">$36.21</div>
                </div>
                <div className="flex flex-row bg-white rounded-lg my-2 p-4">
                  <div className="flex-none mr-2">Icon</div>
                  <div className="flex-1 mx-4">okay</div>
                  <div className="flex-initial">$36.21</div>
                </div>
                <div className="flex flex-row bg-white rounded-lg my-2 p-4">
                  <div className="flex-none mr-2">Icon</div>
                  <div className="flex-1 mx-4">apples</div>
                  <div className="flex-initial">$36.21</div>
                </div>
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
