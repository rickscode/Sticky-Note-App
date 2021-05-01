import Project from "./project"
import Task from "./task"
import closeTaskWindow from "./task-dom"

// default stacks inbox object to store all tasks

export default function inbox()
{

// create default inbox object
const inbox = new Project("inbox");
console.table(inbox);

const trigger = document.getElementById("add-task");
trigger.addEventListener("click", newInboxTask);

// create and store new tasks in inbox
function newInboxTask()
{
    const taskInput = document.getElementById("todo-title").value;
    const taskDate = document.getElementById("todo-date").value;
    const task = new Task(taskInput, taskDate); 
    console.table(task);
    storeInboxTask(task);
}

// store task to inbox 
function storeInboxTask(task)
{
    inbox.settasks(task)
    console.log(inbox)
    closeTaskWindow()
}

}
