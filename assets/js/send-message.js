var firebaseConfig = {
    apiKey: "AIzaSyB5fc660dz_w5HbLAx4xEjXVDmRWPHDrOs",
    authDomain: "gt-test-814ac.firebaseapp.com",
    projectId: "gt-test-814ac",
    storageBucket: "gt-test-814ac.appspot.com",
    messagingSenderId: "443006385017",
    appId: "1:443006385017:web:36ae058c71504e1c99cda8",
    measurementId: "G-KQ0R7EXWFR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let subject = document.querySelector(".subject").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, subject, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, subject, email, message);

}

// Save infos to Firebase
function saveContactInfo(name, subject, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        subject: subject,
        email: email,
        message: message,
    });
}

function sendEmail(name, subject, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "shubhammalik529@gmail.com",
        Password: "ysnyugmkkwwhnegs",
        To: "shubhammalik529@gmail.com",
        From: "shubhammalik529@gmail.com",
        Subject: `${name} sent you a message!`,
        Body: `Name: ${name} <br/> Subject: ${subject} <br/> Email: ${email} <br/> Message: ${message} <br/>`

    }).then((message) => alert("Your message has been sent!"))
}