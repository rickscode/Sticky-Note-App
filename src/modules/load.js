import Project from "./project"
import Task from "./task"
import {closeTaskWindow} from "./task-dom"
import {displayInboxTasks} from "./task-dom"

// default inbox object to store all tasks

const inbox = new Project("inbox");
const inboxTasks = inbox.tasks;

let testTrigger = document.querySelectorAll(".sticky-note");

function createTask()
{

const trigger = document.getElementById("add-task");
trigger.addEventListener("click", newInboxTask);

function newInboxTask()
{
    const taskInput = document.getElementById("todo-title").value;
    const taskDate = document.getElementById("todo-date").value;
    const task = new Task(taskInput, taskDate);
    closeTaskWindow()
    manageInboxTask(task);
    
    // store new task temp in empty array
    //const newInboxTasks = [task];
    // call function to display new task
}

}

function manageInboxTask(task)
{   

    // push task to inbox array 
    inbox.setTasks(task)
    console.log(inbox)
    // display inbox task array on dom
    displayInboxTasks(inboxTasks)

    // remove task from inbox array 
    let testTrigger = document.querySelectorAll(".sticky-note");
    testTrigger.forEach((item) => {
    
    item.addEventListener("click", function(e)
    {
        
        let stickyNodeList = e.target.children
    
        let stickyArr = Array.from(stickyNodeList);
        //console.log(stickyArr)
        stickyArr.splice(1, 1);
    
        let finishedSticky = stickyArr[0].textContent;
    
        console.log(finishedSticky)
    
        inbox.removeTask(finishedSticky);
        console.table(inbox);
    
    })
    })
}

// task needs to be called after displayInboxTasks but if not used
// return nothing so when next called not called multiple times



   
    
    
    
export {createTask}