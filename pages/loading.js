import Link from "next/link";
import Head from "next/head";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading :)</title>
      </Head>
      <h1>Loading...</h1>
      <p>Getting a few things ready... :)</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </>
  );
}
