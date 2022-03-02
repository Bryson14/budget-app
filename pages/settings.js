import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {
  validate_baseid_apikey,
  validate_table_headers,
  clear_db,
} from "../components/database";
import React, { useState, useEffect } from "react";
const API_KEY_NAME = "apikey";
const BASE_ID_NAME = "baseid";

export default function SettingsPage({ props }) {
  const [apikey, setApikey] = useState("");
  const [baseid, setBaseid] = useState("");

  useEffect(() => {
    if (localStorage.getItem(API_KEY_NAME) !== null) {
      setApikey(localStorage.getItem(API_KEY_NAME));
    }
    if (localStorage.getItem(BASE_ID_NAME) !== null) {
      setBaseid(localStorage.getItem(BASE_ID_NAME));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <div className="min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "></div>
        <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold ">Settings</h1>
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

          <form
            onSubmit={(e) => e.preventDefault()}
            className="px-8 pt-6 pb-8 mb-4"
          >
            <div className="justify-around">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="baseid"
                >
                  Base ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bsaeid"
                  type="text"
                  placeholder="Base ID"
                  value={baseid}
                  onChange={(e) => setBaseid(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="apikey"
                >
                  API Key
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="apikey"
                  type="password"
                  placeholder="API Key"
                  value={apikey}
                  onChange={(e) => setApikey(e.target.value)}
                />
              </div>
              <button
                className="bg-emerald-400 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handle_baseid_apikey_submit(baseid, apikey)}
              >
                Update BaseId and Api Key
              </button>
            </div>
          </form>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Test
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Result
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Overall
                        </td>
                        <td
                          id="overall-result"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        ></td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Correct API Key
                        </td>
                        <td
                          id="api-key-table-result"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        ></td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          Correct Base ID
                        </td>
                        <td
                          id="baseid-result"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        ></td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          4
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          Transaction Table Exists
                        </td>
                        <td
                          id="trans-table-result"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        ></td>
                      </tr>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          5
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          Category Table Exists
                        </td>
                        <td
                          id="ctgry-table-result"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        ></td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          6
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          Information Table Exists
                        </td>
                        <td
                          id="info-table-result"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="grid place-items-center">
            <button
              className="m-4 place-self-center bg-emerald-400 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={test_database_connection}
            >
              Test Database
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function test_database_connection() {
  const baseid = localStorage.getItem(BASE_ID_NAME);
  const apikey = localStorage.getItem(API_KEY_NAME);
  let db_results = {};
  if (apikey !== null && apikey !== null) {
    db_results = validate_baseid_apikey(baseid, apikey);
  }
  const okay_text = "Passed";
  const not_okay_text = "Failed";
  if (db_results.passed) {
    document.getElementById("overall-result").innerText = okay_text;
  } else {
    document.getElementById("overall-result").innerText = not_okay_text;
  }

  if (db_results.baseid) {
    document.getElementById("baseid-result").innerText = okay_text;
  } else {
    document.getElementById("baseid-result").innerText = not_okay_text;
  }

  if (db_results.apikey) {
    document.getElementById("api-key-table-result").innerText = okay_text;
  } else {
    document.getElementById("api-key-table-result").innerText = not_okay_text;
  }

  if (db_results.trans_tbl) {
    document.getElementById("trans-table-result").innerText = okay_text;
  } else {
    document.getElementById("trans-table-result").innerText = not_okay_text;
  }

  if (db_results.ctgy_tbl) {
    document.getElementById("ctgry-table-result").innerText = okay_text;
  } else {
    document.getElementById("ctgry-table-result").innerText = not_okay_text;
  }

  if (db_results.info_tbl) {
    document.getElementById("info-table-result").innerText = okay_text;
  } else {
    document.getElementById("info-table-result").innerText = not_okay_text;
  }
}

function handle_baseid_apikey_submit(baseid, apikey) {
  console.log(`trying with ${baseid} and ${apikey}`);
  let db_results = validate_baseid_apikey(baseid, apikey);

  if (db_results.passed === true) {
    localStorage.setItem(API_KEY_NAME, apikey);
    localStorage.setItem(BASE_ID_NAME, baseid);
    test_database_connection();
    return;
  }
  alert("Incorrect Credentials", db_results);
}
