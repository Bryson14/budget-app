import Link from "next/link";
import Head from "next/head";
import React from "react";
import { useContext } from "react";
import {
  add_new_category,
  delete_category,
  update_category,
  get_all_categories,
} from "../components/database";
import stateContext from "./_app.js";
export default function CategoriesPage() {
  const context = useContext(stateContext);
  debugger;
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <h1>Categories</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <div>Here is the state: {context}</div>
    </>
  );
}
