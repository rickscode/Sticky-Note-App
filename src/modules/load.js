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

// remove single task from array

const testTrigger = document.getElementById("sticky-note");
    testTrigger.addEventListener("click", function(e)
    {
        // need to find a value of the sticky to pass in remove 
        // parameter to replace test "rick"
        let stickyNodeList = e.target.children

        let stickyArr = Array.from(stickyNodeList);

        stickyArr.splice(stickyArr.length - 2, 2);

        //let x = newStickArr.toString();

        console.log(stickyArr[0].textContent)

        inbox.removeTask();
        //console.table(inbox);

    })

}

export {inbox}