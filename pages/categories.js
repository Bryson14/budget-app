import Link from "next/link";
import Head from "next/head";
import {
  add_new_category,
  delete_category,
  update_category,
  get_all_categories,
} from "../components/database";

export default function CategoriesPage(props) {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <p>my props: {props.buildTimestamp}</p>
      <h1>Categories</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </>
  );
}
