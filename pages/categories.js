import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import {
  add_new_category,
  delete_category,
  update_category,
  get_all_categories,
} from "../components/database";
import stateContext from "./_app.js";
import { useAppContext } from "../components/context";
export default function CategoriesPage() {
  const context = useAppContext();
  console.log(context);
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <div className="min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "></div>
        <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold ">Categories</h1>
            <Link href="/">
              <a className="">
                <Image
                  src="/images/cottage_black_24dp.svg"
                  alt="home"
                  className="p-1"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
          </div>
          <p>Here is the state okay: {}</p>
        </div>
      </div>
    </>
  );
}
