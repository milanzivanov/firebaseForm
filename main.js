// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB55Y99YkCWTRkhe8YPlNC1P-paIvy9nto",
    authDomain: "demoproject-10792.firebaseapp.com",
    databaseURL: "https://demoproject-10792.firebaseio.com",
    projectId: "demoproject-10792",
    storageBucket: "demoproject-10792.appspot.com",
    messagingSenderId: "364039684036"
  };
  firebase.initializeApp(config);

// refferenc messages collection
var messagesRef = firebase.database().ref();


// liten for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
    e.preventDefault();

    // get values
    let name = getInputVal("name");
    let company = getInputVal("company");
    let email = getInputVal("email");
    let phone = getInputVal("phone");
    let message = getInputVal("message");
    console.log(name);

    // save massege
    saveMessage(name, company, email, message, phone);

    // show alert
    document.querySelector(".alert").style.display = "block";

    // hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // clear form
    document.getElementById("contactForm").reset();
}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message
    });
}