#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addList = await inquirer.prompt([
        {
            name: "todo",
            message: "what you want to add in your todos",
            type: "input",
        },
        {
            name: "addmore",
            message: "do you want to add more",
            type: "confirm",
            default: "false"
        }
    ]);
    todos.push(addList.todo);
    condition = addList.addmore;
    console.log(todos);
}
