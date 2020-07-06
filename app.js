// const dotenv = require('dotenv');
// dotenv.config();
//import { envVars } from './environmentVars.js';
//const { envVars } = require('./environmentVars.js')

//let apikey=localStorage.getItem("apikey");
//console.log("apikey",apikey)

//FIREBASE CONFIGURATION
firebase.initializeApp({
    apiKey: "Use this link to access live Demo: http://icarlospro.com/Projects/CRUD_Project/index.html",
    authDomain: "cc-crud-project.firebaseapp.com",
    projectId: "cc-crud-project",
});
// firebase.initializeApp({
//     apiKey: process.env.APIKEY,
//     authDomain: process.env.AUTHDOMAIN,
//     projectId: process.env.PROJECTID,
// });
// console.log("AVer que onda",envVars.apikey)
// firebase.initializeApp({
//     apiKey: envVars.apikey,
//     authDomain: envVars.authdomain,
//     projectId: envVars.projectid,
// });
// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();
//CREATE NEW ENTRIES
function save(){
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let food = document.getElementById('food').value;

    db.collection("users").add({
        first: name,
        last: lastname,
        food: food
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    //Reset the input fields
    document.getElementById('name').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('food').value = "";

}

//READ ENTRIES
let table = document.getElementById('table');
db.collection("users").onSnapshot((querySnapshot) => {  //onSnapShop() allows for refresh data in real time from firebaes.  https://firebase.google.com/docs/firestore/query-data/listen
    table.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        table.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th> 
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().food}</td>
        <td><button class="btn btn-danger" onclick="remove('${doc.id}')">remove</button></td>
        <td><button class="btn btn-warning" onclick="edit('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().food}')">edit</button></td>
        </tr>
        `
    });
});


//DELETE ENTRIES
//https://firebase.google.com/docs/firestore/manage-data/delete-data
function remove(id){
    db.collection("users").doc(id).delete().then(function() {  //The button saves the id and when pressed it uses it to delete the record
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}


//UPDATE ENTRIES
//https://firebase.google.com/docs/firestore/manage-data/add-data   Update a document section
function edit(id,name,lastname,food){
    document.getElementById('name').value = name;
    document.getElementById('lastname').value = lastname;
    document.getElementById('food').value = food;
    let button = document.getElementById('button');
    button.innerHTML = 'edit';

    button.onclick = function(){  //This changes the innerHTML to 'edit'. And execute the function below.
        let buttonClicked = db.collection("users").doc(id);  //Sends the information form the row to the edit area
        let name = document.getElementById('name').value;
        let lastname = document.getElementById('lastname').value;
        let food = document.getElementById('food').value;

        return buttonClicked.update({
            first: name,
            last: lastname,
            food: food
        })
        .then(function() {
            console.log("Document successfully updated!");
            button.innerHTML = 'Save';
            document.getElementById('name').value = '';
            document.getElementById('lastname').value = '';
            document.getElementById('food').value = '';
            
            window.location.reload();
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}