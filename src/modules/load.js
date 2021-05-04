import Project from "./project"
import Task from "./task"
import {closeTaskWindow} from "./task-dom"
import {displayInboxTasks} from "./task-dom"

// default inbox object to store all tasks

function inbox()
{

// create default inbox object

const inbox = new Project("inbox");

const trigger = document.getElementById("add-task");
trigger.addEventListener("click", newInboxTask);

// create and store new tasks in inbox

function newInboxTask()
{
    const taskInput = document.getElementById("todo-title").value;
    const taskDate = document.getElementById("todo-date").value;
    const task = new Task(taskInput, taskDate);
    closeTaskWindow()
    storeInboxTask(task);
}

// clean up this function
function storeInboxTask(task)
{
    // store task to inbox object tasks array
    inbox.setTasks(task)
    // store inbox object tasks array in variable
    const inboxTasks = inbox.tasks;
    // store new task temp in empty array
    const newInboxTasks = [task];
    // call function to display new task
    displayInboxTasks(newInboxTasks)
    // check tasks in object
    console.table(inbox);
}

}

export {inbox}