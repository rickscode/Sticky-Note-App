import Project from "./project"
import Task from "./task"


// default inbox object to store all tasks

export default function inbox()
{
// create default inbox object
const inbox = new Project("inbox");
console.table(inbox);

// create and store new tasks in inbox
const trigger = document.getElementById("add-task");
trigger.addEventListener("click", newTask);

function newTask()
{
    const taskInput = document.getElementById("todo-title").value;
    const task = new Task(taskInput); 
    console.table(task);
    storeInboxTask(task);
}

// store task to inbox 
function storeInboxTask(task)
{
    inbox.settasks(task)
    console.log(inbox)
}

}
