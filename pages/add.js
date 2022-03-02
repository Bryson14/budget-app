import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function Add() {
  const [price, setPrice] = useState("");
  let d = new Date();
  const [date, setDate] = useState(d.toISOString().split("T")[0]);
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (Number(price) < 0) {
      document.getElementById(
        "message-div"
      ).innerHTML = `A negative number will count as\n a credit towards the category.`;
      document.getElementById("message-div").classList.add();
      document.getElementById("message-div").classList.remove();
    } else {
      document.getElementById("message-div").innerHTML = "";
      document.getElementById("message-div").classList.add();
      document.getElementById("message-div").classList.remove();
    }
  });

  // TODO add a user into the form submit?

  const handle_submit = () => {
    console.log(
      `Price: ${price}, date: ${date}, category: ${category}, note: ${note}`
    );
  };

  const validate_and_set_price = (p) => {
    debugger;
    // how to make a minus sign on iphone keyboard layout
    if (p === "..") {
      setPrice("-");
    }
    // just a decimal
    else if (p === ".") {
      setPrice(p);
    }
    // not a number
    else if (isNaN(Number(p))) {
      setPrice("");
    }
    // no decimal
    else if (!p.includes(".")) {
      setPrice(p);
    } else {
      // only tenths place exists
      if (p.indexOf(".") === p.length - 2) {
        setPrice(Number(p).toFixed(1));

        // only decimal at the end of number
      } else if (p.indexOf(".") === p.length - 1) {
        setPrice(p);
      } else {
        // hundreths place exist or smaller
        setPrice(Number(p).toFixed(2));
      }
    }
  };

  return (
    <>
      <div className="min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "></div>
        <div className="relative rounded-xl px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10 dark:bg-gradient-to-t dark:from-slate-500 dark:via-purple-900 dark:to-gray-800">
          <div className="absolute top-0 right-0 h-16 w-16 p-4 grid items-center">
            <Link href="/">
              <a>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="35"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
                </svg>
              </a>
            </Link>
          </div>

          <div className="align-center mb-10">
            {/* TODO change the font */}
            <h1 className="text-xl font-bold  ">Add Expenses</h1>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="px-3 pt-6 pb-8 mb-4"
          >
            <div className="grid justify-around">
              <div className="mb-8">
                <span className="absolute pl-6 text-bold text-gray-700 leading-tight py-1 text-slate-500 text-3xl">
                  $
                </span>
                <input
                  className="text-center text-bold text-2xl block w-full text-emerald-400 appearance-none border rounded-3xl  py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="price_input"
                  type="text"
                  inputMode="decimal"
                  // pattern="[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => validate_and_set_price(e.target.value)}
                />
              </div>
              <div className="mb-6 xl:w-96">
                <span className="absolute p-2.5 z-1000">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M0,0h24v24H0V0z" fill="none" />
                    <path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z" />
                  </svg>
                </span>
                <select
                  id="category-select"
                  className="font-['Proxima Nova'] form-select transition ease-in-out shadow appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="home" className="p2-2">
                    Home
                  </option>
                  <option value="car" className="p2-2">
                    Car
                  </option>
                  <option value="b-fun-money" className="p2-2">
                    Brysons Money
                  </option>
                  <option value="food" className="p2-2">
                    Food
                  </option>
                </select>
              </div>
              <div className="mb-6">
                <span className="absolute p-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <rect fill="none" height="24" width="24" />
                    <path d="M19,5v9l-5,0l0,5H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h10l6-6V5C21,3.9,20.1,3,19,3z M12,14H7v-2h5V14z M17,10H7V8h10V10z" />
                  </svg>
                </span>
                <input
                  className="text-xl font-normal bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="note"
                  type="text"
                  placeholder="Note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <div className="relative">
                  <span className="absolute p-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="fill-black dark:fill-white"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z" />
                    </svg>
                  </span>
                  <input
                    className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="date-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="grow bg-emerald-400 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                onClick={() => handle_submit()}
              >
                Add reciept
              </button>
            </div>
          </form>
          <div
            visibility="hidden"
            id="message-div"
            className="max-width text-yellow-500 text-sm whitespace-nowrap"
          ></div>
          <div className=" lg:hidden max-width text-slate-500 text-sm">
            Use <code>..</code> to make a minus sign!
          </div>
        </div>
      </div>
    </>
  );
}
