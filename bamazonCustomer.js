var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Longpass1",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    showTable();
});

console.log("---------------------")
console.log("ID | Products | Price")
console.log("---------------------")

    function showTable () {
        connection.query("SELECT * FROM Products", function (err, res) {
            if (err) throw err;
            console.table(res)
            
        })
        
        itemChoice();
    }

        function itemChoice () {
            inquirer.prompt([ {
                name: "answer",
                type: "input",
                message: "\nWhat item would you like to purchase? Please enter ID number\n",
                filter: Number
            },
            ])

            .then (function(answers) {
                var productID = answers;
                productCheck(productID);
            });

        function productCheck (answers) {

        }


        }
        
    
    