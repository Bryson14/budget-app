import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  delete_transaction,
  update_transaction,
  get_all_transactions,
  get_date_ranged_transaction,
} from "../components/database";

export default function transactions() {
  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <h1>Transactions</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <table>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Note</th>
          <th>User</th>
        </tr>
        <tr>
          <td>2/1</td>
          <td>Groceries</td>
          <td>$25.12</td>
          <td>Walmart</td>
          <td>Bryson</td>
        </tr>
        <tr>
          <td>2/2</td>
          <td>Apartment</td>
          <td>$84.36</td>
          <td>Sheets</td>
          <td>Jazmin</td>
        </tr>
      </table>
    </>
  );
}
