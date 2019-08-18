var mysql = require("mysql");
var inquirer = require("inquirer");



var connection = mysql.createConnection({
    host: "localhost",

    
    port: 3306,

    
    user: "root",

    
    password: "Longpass1",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    
    
});

    

    function showTable () {
        connection.query("SELECT ID, Products, Department, Price FROM products", function (err, res) {
            if (err) throw err;
            
            console.table(res)
            
        })
        
        setTimeout(itemChoice, 10)
    }
    
        function itemChoice () {
           inquirer.prompt([ {
                name: "ID",
                type: "input",
                message: "\nWhat item would you like to purchase? Please enter ID number\n",
                filter: Number
            },
            ])

            .then (function(answers) {
                var productID = answers.ID;
                var subtract = 1;
                // productCheck(productID);
                productCheck(productID, subtract);
                
                
            });
        }
        
        async function productCheck (answers, minus) {
                connection.query('SELECT * FROM products WHERE ID = ' + answers, function (err, res) {
                    if (err) throw err;
                    
                    
                   connection.query("UPDATE products SET Stock = Stock - " + newStock + "WHERE ID = " + answers);
                   
                    if (res[0].Stock > 0) {

                    console.log("You've purchased a beautiful new " + res[0].Products + ", " + "there is only " + res[0].Stock + " left.");

                    } else {
                        
                    console.log("There is no " + res[0].Products + " left, please choose a new item")

                    }

                    showTable();
                });
                
        };
            
        // function test (answers, minus) {
        //     connection.query("SELECT ID, Products, Department, Price FROM products");
        //     connection.query('UPDATE products SET Stock = Stock - ' + minus);
        //     console.log("There is only " + answers + ID + "left");
        //     }
        showTable();

        