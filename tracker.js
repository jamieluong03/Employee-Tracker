// dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");

// create mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hellojamie3!",
    database: "employeeTracker_db"
});

// initiate mysql connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// prompt user first question
promptUser();

function promptUser(){
    return inquirer.prompt([
        {
          type: "list", 
          message: "What would you like to do?",
          choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
            ],
            name: "option"
        }
    ])
    .then(function({option}){
        this.option = option;

        switch(option){
            case "View All Employees": 
                viewAllEmployees();
                break;
            case "Add Employee": 
                addEmployee();
                break;
            case "Update Employee":
                updateEmployee();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Add Department":
                addDepartment();
                break;
            default:
                quitNode();
        }
    });
};

// promptUser()
//     .then(function({option}){
//         this.option = option;

//         switch(option){
//             case "View All Employees": 
//                 viewAllEmployees();
//                 break;
//             case "Add Employee": 
//                 addEmployee();
//                 break;
//             case "Update Employee":
//                 updateEmployee();
//                 break;
//             case "View All Roles":
//                 viewAllRoles();
//                 break;
//             case "Add Role":
//                 addRole();
//                 break;
//             case "View All Departments":
//                 viewAllDepartments();
//                 break;
//             case "Add Department":
//                 addDepartment();
//                 break;
//             default:
//                 quitNode();
//         }
        
//     })

// view all employees (REQ)
function viewAllEmployees(){
    var queryString = "SELECT * FROM employee";
    connection.query(queryString, function (err, result) {
        if (err) throw err;
        console.table(result);
        promptUser();
    });
};

// view all employees by department (BONUS)

// view all employees by manager (BONUS)

// add employee (REQ)
function addEmployee(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter first name",
            name: "first_name",
            // validate: function validateFirst (name){
            //     return name! == '';
            // }
        },
        {
            type: "input",
            message: "Enter last name",
            name: "last_name",
            // validate: function validateLast(name) {
            //     return name! =='';
            // }
        },
        {
            type: "list",
            message: "What is the role id?",
            choices: [],
            name: "role_id"
        },
        {
            type: "input",
            message: "What is the manager id?",
            choices:[],
            name: "manager_id"
        }
    ])
}

// remove employee (BONUS)

// update employee role (REQ)
function updateEmployee(){}

// update employee manager (BONUS)

// view all roles (REQ)
function viewAllRoles(){
    var queryString = "SELECT * FROM roles";
    connection.query(queryString, function (err, result){
        if (err) throw err;
        console.table(result);
        promptUser();
    });
};

// add role (REQ)
function addRole(){
    return inquirer.prompt([
        {
            type: "list",
            message: "What role would you like to add?",
            choices: [],
            name: "title"
        },
        {
            type: "input",
            message: "What is the department id?",
            choices:[],
            name: "department_id"
        }
    ])
}


// remove role (BONUS)

// view all departments (REQ)
function viewAllDepartments(){
    var queryString = "SELECT * FROM department";
    connection.query(queryString, function (err, result){
        if (err) throw err;
        console.table(result);
        promptUser();
    });
};

// add department (REQ)
function addDepartment(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter first name",
            name: "first_name",
            // validate: function validateFirst (name){
            //     return name! == '';
            // }
        },
        {
            type: "input",
            message: "Enter last name",
            name: "last_name",
            // validate: function validateLast(name) {
            //     return name! =='';
            // }
        },
        {
            type: "list",
            message: "What is the role id?",
            choices: [],
            name: "role_id"
        },
        {
            type: "input",
            message: "What is the manager id?",
            choices:[],
            name: "manager_id"
        }
    ])
}


// remove department (BONUS)

// quit (REQ)
function quitNode(){
    connection.end();
};
