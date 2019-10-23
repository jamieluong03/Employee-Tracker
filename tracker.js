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
};

promptUser()
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
        
    })

// view all employees (REQ)
function viewAllEmployees(){}

// view all employees by department (BONUS)

// view all employees by manager (BONUS)

// add employee (REQ)
function addEmployee(){}

// remove employee (BONUS)

// update employee role (REQ)
function updateEmployee(){}

// update employee manager (BONUS)

// view all roles (REQ)
function viewAllRoles(){}

// add role (REQ)
function addRole(){}

// remove role (BONUS)

// view all departments (REQ)
function viewAllDepartments(){};

// add department (REQ)
function addDepartment(){}
// remove department (BONUS)

// quit (REQ)
function quitNode(){};
