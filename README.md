# CRUD_Project

A simple web app capable of CRUD operations.

## Live Demo

http://icarlospro.com/Projects/CRUD_Project/index.html 
##
or
##
http://cc-12-crud-project-carlos-salazar.s3-website-us-east-1.amazonaws.com/

## Getting Started

This project was made during my time in Code Chrysalis.  This project started as a webapp with a back end consisting of Postgres, GraphQl, Knex, with a HTML front.  Due to technical difficulties connecting the database to a front end and other miriad of problems and short amount of time available I decided for a MVP that uses a Firebase cloud database instead. 

### Installing

For security reasons the firebase API Key has not been included in the project.  It's easy however to get your own api key from https://firebase.google.com/docs/firestore/quickstart?authuser=0 where it will be possible to generate a database and Apikeys of your own. It should look like this:
```
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();
```
Once you have your own API Keys replace the ones inside ```app.js``` and it should connect to your own database.  The functionality will remain the same. You will be able to Create Read Update and Delete your friend's names and their favourite foods. The database in firebase is updated in realtime. 


## Running the tests

Once you have updated your API keys use Live Server or a similar alternative to run index.html from your localhost.


### Additional Files

This repository contains also the files I created while trying to make this project work with Postgres and later with SQL. Among the files I have included Migrations, Schemas and Data seeder files.

## Authors

* **Carlos Salazar**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

The Code Chrysalis teaching staff and the CC-12 students for their ongoing support.
