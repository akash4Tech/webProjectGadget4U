const express = require("express");
const cors = require("cors");

//data base form workbench

var mysql = require("mysql");

//fuction to connect sql DB & server

app = express();
app.use(cors());
app.use(express.json());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "olx",
});

connection.connect();




//get all products


app.get("/getproducts", (req, res) => {
    connection.query("SELECT * from Product;", function (error, results) {
      if (error) {
        console.log(error);
        console.log("result");
      }
  
      console.log("The solution is: ", results);
      res.json(results);
    });
  });
  




  //get mobile details 

app.get("/getMobiles", (req, res) => {
    connection.query("SELECT * from mobiles   ;", function (error, results) {
      if (error) {
        console.log(error);
        console.log("result");
      }
  
      console.log("The solution is: ", results);
      res.json(results);
    });
  });


//get  laptop details 

app.get("/getLaptops", (req, res) => {
  connection.query("SELECT * from  laptops ;", function (error, results) {
    if (error) {
      console.log(error);
      console.log("result");
    }

    console.log("The solution is: ", results);
    res.json(results);
  });
});



//login crud 







//address crud

      // get ==============
 
app.get("/address", (req, res) => {
    connection.query("SELECT * from CustomerAddress", function (error, results) {
      if (error) {
        console.log(error);
        console.log("result");
      }
  
      console.log("The solution is: ", results);
      res.json(results);
    });
  });
  


  // insert ==============

  app.post("/insert", (req, res) => {
    connection.query("insert into CustomerAddress(customer_id, address_line1, address_line2, city, state, postal_code, country) values(?,?,?,?,?,?,?)",[req.body.customer_id, req.body.address_line1, req.body.address_line2, req.body.city, req.body.state, req.body.postal_code, req.body.country], function (error, results) {
      if (error) {
        console.log(error);
        console.log("result");
      }
  
      console.log("The solution is: ", results);
      res.json(results);
    });
  });



 // inesert product in product table 


 app.post("/addproduct", (req, res) => {
  connection.query("insert into Product(ProductName, Category, Price, StockQuantity, Description) values(?,?,?,?,?)",[req.body.ProductName, req.body.Category, req.body.Price, req.body.StockQuantity, req.body.Description], function (error, results) {
    if (error) {
      console.log(error);
      console.log("result");
    }

    console.log("The solution is: ", results);
    res.json(results);
  });
});


//
  






app.listen(3000, () => {
  console.log("listening port 3000");
});