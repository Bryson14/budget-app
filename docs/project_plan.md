# Budget App 2.0
> *Here we go again*

## Statement of Need
This is a lightweight app that helps people keep track of their expenses according to a "envelope system"

## General Concept
Using a free backend hosted by *Airtable* and on *Github Pages* by taking advantage of static website hosting. The frontend is developed using *Next.Js*.

- [Link to Figma Designs](https://www.figma.com/file/81hMwskA3KPJOQjupdAdnn/Budget-App-2.0?node-id=0%3A1)

## Requirements
- [x] Must connect to one base inside *Airtable*.
- [ ] Must be able to delete or alter transactions and be reflected in *Airtable*
- [ ] Must be able to test connection to *AirTable* base.
- [ ] Must be reasonably secure holding and using the *baseID* and *API Key*
- [x] Must be able to remember the *base ID* and *API Key* for 30 days before asking again.
- [ ] Must be able to delete or alter categories and be reflected in *Airtable*
- [x] Must be statically hosted on github
- [ ] Must be able to remember user name, and other settings
- [ ] Must redirect to settings page if the app is not logged in
- [ ] Must be able to download all transactions as a csv or copy them to a clip board. Also can filter ti by month or year.
- [ ] Must be able to set up a *Airtable* base by itself and make a new empty tables. This way a new user can make an *Airtable* account, give the base id and api key, and they rest is taken care of
- 

## Maybes
- The transaction should record which user make it
- add optional website to the expense and the expenses component can async fetch the favicon and add it.
- Have a currency converter
- Add tags to each item. the user's name is auto added as a tag

## Specifications
- *Airtable's* free tier can only collect up to 1200 records. Maybe I store records in json form instead of in a relational db way. *Airtable's* long text field type has a limit of 100,000 characters. That might be useful for json storage.
- I could store a months worth of transaction in a json object in one
- Make a table called settings for the user's static state info
- Each transaction object needs to have the following props: `date`, `ctgy`, `amnt`, `note`, and `user`. (date, category, amount, note, user)
- There is not way through the API to make a new table/ tab in a base. [see link](https://community.airtable.com/t/how-to-create-a-new-table-in-an-existing-base-through-the-api/26190/6). So, to set up the db, you have to make the headers and and tabs yourself. So, here are the following db functions:
- - create new transaction
- - read all transactions
- - read transactions by date range
- - update transaction
- - delete transaction
- - clear all transactions

- - create new category
- - read all categories
- - update category
- - delete category
- - clear database

- For the program to work properly, there must be three tables in the airtable:
- - "Transactions"
- - "Categories"
- - "Information"

When authorizing the system so the apikey, baseid, and all necessary tables are there, here are th follwoing errores:
- when the api key is wrong, it is a `401` code, with the error of `AUTHORIZATION`.
- When the baseid is wrong, its a `404` code with the error of `NOT_FOUND` and message of `Could not find what you are looking for'`
- When the table name is wrong, its a `404` code with an error of `NOT_FOUND` and message of `Could not find table what in application app5VP16VBp5NgMg5`