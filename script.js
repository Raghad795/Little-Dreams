//prevent the form from submission
document.getElementById("form")
.addEventListener("submit", function (event) {
event.preventDefault();

//reading user input
let fullName = document.getElementById("fullName").value;
let gender = document.getElementById("gender").value;
let mobile = document.getElementById("mobile").value;
let dob = document.getElementById("dob").value;
let email = document.getElementById("email").value;
let language = document.getElementById("language").value;
let message = document.getElementById("message").value;

//sending AJAX request
fetch("/insert", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ fullName: fullName, gender: gender , mobile: mobile , dob: dob ,email: email , language: language ,message: message}),
})
.then(function (response) {
if (response.ok) {
    alert("Thank you for reaching us; feedback will be very soon");
    document.getElementById("fullName").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("language").value = "";
    document.getElementById("message").value = "";
} else {
    alert("Failed to insert data!");
}
})
.catch(function (error) {
    console.error("Error:", error);
    alert("An error occurred!");
    });
});