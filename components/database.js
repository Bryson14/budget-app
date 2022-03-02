import { base } from "airtable";

const CATEGORY_PROPS = ["name", "amount"];
const TRANSACTION_PROPS = ["date", "ctgy", "amnt", "note", "user"];
const TABLE_NAMES = ["Transactions", "Categories", "Information"];
var Airtable = require("airtable");
const API_KEY_NAME = "apikey";
const BASE_ID_NAME = "baseid";

/**
 * Returns true or false if the db was cleared.
 * @param {String} baseid
 * @param {String} apikey
 * @returns {boolean}
 */
export function clear_db(baseid, apikey) {
  if (
    confirm(
      "Are you sure you want to clear you current data and make a new database?"
    )
  ) {
    // clear everything
  }
  return false;
}

/**
 * Returns true or false if transaction was recorded into database
 * @param {String} baseid
 * @param {String} apikey
 * @param {Object} transaction_obj
 * @returns {boolean}
 */
export function add_new_transaction(baseid, apikey, transaction_obj) {
  if (is_valid_transaction(transaction_obj)) {
    console.log("adding new transaction");
    // todo add trans to the db
    return true;
  } else {
    console.error(`Error adding new transaction: ${transaction_obj}`);
    return false;
  }
}

/**
 * Returns if the transaction object is valid and contains all properties.
 * @param {Object} transaction_obj
 * @returns {boolean}
 */
function is_valid_transaction(transaction_obj) {
  return TRANSACTION_PROPS.every((prop) =>
    transaction_obj.hasOwnProperty(prop)
  );
}

/**
 * Returns true or false if transaction was deleted
 * @param {String} baseid
 * @param {String} apikey
 * @param {String} transaction_id
 * @returns {boolean}
 */
export function delete_transaction(baseid, apikey, transaction_id) {
  console.log(`deleteing transaction: ${transaction_id}`);
  // todo delete trans to the db
  return true;
}

/**
 * Returns true or false if transaction was deleted
 * @param {String} baseid
 * @param {String} apikey
 * @param {String} transaction_id
 * @returns {boolean}
 */
export function update_transaction(
  baseid,
  apikey,
  transaction_id,
  new_transaction_obj
) {
  if (is_valid_transaction(new_transaction_obj)) {
    console.log(`updating transaction: ${transaction_id}`);
    // todo update trans to the db
    return true;
  } else {
    console.log("Invalid transaction obj to update to");
  }
}
// todo  how to fix airtable https://stackoverflow.com/questions/64858450/node-js-airtable-await-doesnt-wait-for-promise-to-be-resolved
/**
 * Returns all transactions in the db
 * @param {Object:Airtable_Base_Object} base
 * @returns {Object[]}
 */
export async function get_all_transactions(base) {
  console.log(`getting all transactions:`);
  let all_records = [];
  // make this function async
  base("Transactions")
    .select({
      maxRecords: 1000,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          // add the promise. Casted to promise since I'm not sure if the external promise will behave normally
          console.log(
            `adding record. type: ${typeof record}. name ${
              record.constructor.name
            } is a promise: ${typeof record.then === "function"}`
          );
          all_records.push({ id: record.id, ...record.fields });
          console.log("record added: ", all_records);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return [];
        } else {
          console.log("done getting all transactions", all_records);
          return all_records;
        }
      }
    );
  console.log(
    `end of function. ${all_records}, len: ${
      all_records.length
    }, type: ${typeof all_records}. name ${
      all_records.constructor.name
    } is a promise: ${typeof all_records.then === "function"}`
  );
  let p = Promise.all(all_records);
  return p;
}

/**
 * Returns all transactions in the db
 * @param {String} baseid
 * @param {String} apikey
 * @param {String} startdate
 * @param {String} enddate
 * @returns {Object[]}
 */
export function get_date_ranged_transaction(
  baseid,
  apikey,
  startdate,
  enddate
) {
  console.log(`getting all transactions between ${startdate} and ${enddate}`);
  // todo get all transaction between the dates
  return [];
}

function is_valid_category(category_obj) {
  return CATEGORY_PROPS.every((prop) => category_obj.hasOwnProperty(prop));
}

/**
 * Returns true or false if category was recorded into database
 * @param {String} baseid
 * @param {String} apikey
 * @param {Object} category_obj
 * @returns {boolean}
 */
export function add_new_category(baseid, apikey, category_obj) {
  if (is_valid_category(category_obj)) {
    console.log("adding new category");
    // todo add category to the db
    return true;
  } else {
    console.error(`Error adding new category: ${category_obj}`);
    return false;
  }
}

/**
 * Returns true or false if category was deleted
 * @param {String} baseid
 * @param {String} apikey
 * @param {String} category_id
 * @returns {boolean}
 */
export function delete_category(baseid, apikey, category_id) {
  console.log(`deleteing category: ${category_id}`);
  // todo delete catgry to the db
  return true;
}

/**
 * Returns true or false if category was updated
 * @param {String} baseid
 * @param {String} apikey
 * @param {String} category_id
 * @param {Object} new_category_obj
 * @returns {boolean}
 */
export function update_category(baseid, apikey, category_id, new_category_obj) {
  if (is_valid_category(new_category_obj)) {
    console.log(`updating category: ${category_id}`);
    // todo update category to the db
    return true;
  } else {
    console.log("Invalid category obj to update to");
  }
}

/**
 * Returns all categories in the db
 * @param {String} baseid
 * @param {String} apikey
 * @returns {Object[]}
 */
export function get_all_categories(baseid, apikey) {
  console.log(`getting all categories:`);
  // todo get all categories
  return [];
}

/**
 * Returns if the baseid and apikey the user entered is legit in the form
 * {passed: false, apikey: true, baseid: false, trans_tbl: false, ctgy_tbl: false, info_tbl: false}
 * @param {String} baseid
 * @param {String} apikey
 * @returns {Object}
 */
export function validate_baseid_apikey(baseid, apikey) {
  console.log("Validating baseid and api key");
  let passed_obj = {
    passed: true,
    apikey: true,
    baseid: true,
    trans_tbl: true,
    ctgy_tbl: true,
    info_tbl: true,
  };
  var base = new Airtable({ apiKey: apikey }).base(baseid);

  TABLE_NAMES.forEach((table) => {
    base(table)
      .select({
        maxRecords: 1,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            //   console.log("Retrieved", record.get("UID"));
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            passed_obj.passed = false;
            if (err.message.indexOf("api key") !== -1) {
              passed_obj.apikey = false;
            } else if (
              err.message.indexOf("Could not find what you are looking for") !==
              -1
            ) {
              passed_obj.baseid = false;
            } else if (
              err.message.indexOf("Could not find table") !== -1 &&
              table == TABLE_NAMES[0]
            ) {
              passed_obj.trans_tbl = false;
            } else if (
              err.message.indexOf("Could not find table") !== -1 &&
              table == TABLE_NAMES[1]
            ) {
              passed_obj.ctgy_tbl = false;
            } else if (
              err.message.indexOf("Could not find table") !== -1 &&
              table == TABLE_NAMES[2]
            ) {
              passed_obj.info_tbl = false;
            }
          }
        }
      );
  });
  console.log(passed_obj);
  return passed_obj;
}

/**
 * Returns if the tables are set up properly with the right headers
 * @param {String} baseid
 * @param {String} apikey
 * @returns {Object}
 */
export function validate_table_headers(baseid, apikey) {
  console.log("Validating table headers for the 3 tables");
}

export function quick_keys_check() {
  // todo make the name of these keys part of the overall prop
  // get the keys from state and not local storage??
  const baseid = localStorage.getItem(BASE_ID_NAME);
  const apikey = localStorage.getItem(API_KEY_NAME);
  return baseid !== null && apikey !== null;
}

/**
 * Returns a promise of a another db function.
 * @param {function} func
 * @returns {Promise}
 */
export async function execute_db_function(func) {
  // should be related to state or from localstorage
  const baseid = localStorage.getItem(BASE_ID_NAME);
  const apikey = localStorage.getItem(API_KEY_NAME);
  var base = new Airtable({ apiKey: apikey }).base(baseid);
  return func(base);
}
