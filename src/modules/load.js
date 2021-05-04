import Project from "./project"
import Task from "./task"
import {closeTaskWindow} from "./task-dom"
import {displayInboxTasks} from "./task-dom"

// default inbox object to store all tasks

const inbox = new Project("inbox");

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
    storeInboxTask(task);
}

}


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
    //console.table(inbox);
    finishTask();
}

// task needs to be called after displayInboxTasks but if not used
// return nothing so when next called not called multiple times
function finishTask(){
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
    
export {createTask}