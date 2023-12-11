const express = require("express");
const app = express();
const port = 3050;

// Setting up DB
const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
  port: 3306,
});


app.use("/", express.static("./webProject"));


const { check, validationResult } = require("express-validator");
const formValidation = getFormValidation();

// Insert data route with validation middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/insert", formValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    msg = "Sorry, we found validation errors with your submission";
    msg += printErrors(errors.array());
    res.send(msg);
  } 
  else {
    // If validation passes, proceed to insert data into the database
    const data = req.body;
    const query = "INSERT INTO testuser SET ?";

    pool.query(query, data, (error, result) => {
      if (error) {
        throw error;
      }

      const userName = data.name;

      // Retrieve data from the database based on the user's name
      pool.query("SELECT * FROM testuser WHERE name = ?", [userName], (error, result) => {
        if (error) {
          throw error;
        }
        console.log(result);
        const msg = `Thank you, ${userName}, for reaching us! Your feedback will be processed very soon.`;
    
        res.send(msg);
      });

    });
  }
});


// View data route
app.get("/view", (req, res) => {
  const query = "SELECT * FROM testuser";

  pool.query(query, (error, result) => {
    if (error) throw error;
    console.error('Error fetching data from MySQL:', error);
    res.json(result);
  });
});


// Activating server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Validate function:
function getFormValidation() {
  return [
    check("name")
     .isLength({ min: 4, max: 30 }).withMessage("Full name must be between 4 - 30 characters ")
     .isString().withMessage("Full name must contain only strings")
     .matches(/^[A-Za-z]+$/).withMessage("Full name must be written with English letters only")
     .trim()
     .escape(),
    check("email")
      .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/) .withMessage("Email must be in a valid format with no special char other than "+"(@ and .)"+"example: x@y.com" )
      .trim()
      .escape(),
    check("gender")
      .trim()
      .escape(),
    check("mobile")
      .isLength({ min: 10, max: 13 }).withMessage("Mobile number must be between 10 - 13 digits.")
      .matches(/^(\+9665\d{8}|05\d{8})$/).withMessage("Mobile number must be in the Saudi form {+9665**** or 05****}")
      .isNumeric().withMessage("Mobile number must contain only numbers")
      .trim()
      .escape(),
      check("dob")
      .isDate().withMessage("Date of birth must be a valid date")
      .custom((value) => {
        const dobDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();

        if (age < 7) {
          throw new Error('Age must be at least 7 years.');
        }

        return true;
      })
      .trim()
      .escape(),
    
   
  ];
}
//print errors function
function printErrors(errorArray){
  let errors=[];
  for(let index=0; index<errorArray.length; index++){
    let err=errorArray[index]["msg"];
    let msg ="<p>-"+err+"</p>";
    errors.push(msg);
  }
  return errors.join("");
}