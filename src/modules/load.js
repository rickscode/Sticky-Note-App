import Project from "./project"
import Task from "./task"
import {closeTaskWindow} from "./task-dom"
import {displayInboxTasks} from "./task-dom"
import {clearTaskContainer} from "./task-dom"
import {removeSticky} from "./task-dom"
// default inbox object to store all tasks

const inbox = new Project("inbox");
const inboxTasks = inbox.tasks;

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
    clearTaskContainer()
    manageInboxTask(task);
}

}

function manageInboxTask(task)
{   

    // push task to inbox array 
    inbox.setTasks(task)

    // display tasks on dom
    displayStacksTask()
    removeTask()
}


function todayTasks()
{

    // empty array to hold copy of inbox.tasks
    let tasksDueToday = [];
    
    // duplicate of inbox tasks
    let allTasksCopy = JSON.parse(JSON.stringify(inboxTasks));

    // todays date in string format
    let date = new Date();
    
    //console.log(date)

     // convert string date to yyyy-mm-dd format

    function convertDate(date) {
        let yyyy = date.getFullYear().toString();
        let mm = (date.getMonth()+1).toString();
        let dd  = date.getDate().toString();
    
        let mmChars = mm.split('');
        let ddChars = dd.split('');
    
        return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }

   // store new formatted date in variable

    let todayFormatted = convertDate(date);

    console.log(todayFormatted);


   // get index of object with date matching todays date
  
  for(let i = 0; i < allTasksCopy.length +1; i++)
  {
    let findTodayDateIndex = [allTasksCopy.map(function(item) { return item.date; }).indexOf(todayFormatted)];
  
    console.log(findTodayDateIndex)

  
     // slice allTasksCopy index into new array
  
     tasksDueToday.push(allTasksCopy[findTodayDateIndex])

     // splice remove index 0 from array
     allTasksCopy.splice(findTodayDateIndex, 1);
    
     //console.log(allTasksCopy);

}

clearTaskContainer()
displayInboxTasks(tasksDueToday)
console.log(tasksDueToday)

}


function displayStacksTask()
{
    clearTaskContainer()
    displayInboxTasks(inboxTasks)
}

function removeTask()
    {
    let testTrigger = document.querySelectorAll(".sticky-note");
    testTrigger.forEach((item) => {
    
    item.addEventListener("click", function(e)
    {
        
        let stickyNodeList = e.target.children
    
        let stickyArr = Array.from(stickyNodeList);
        
        stickyArr.splice(1, 1);
    
        let finishedSticky = stickyArr[0].textContent;
        
        inbox.removeTask(finishedSticky);
        
        removeSticky();
    
        console.log(inbox.tasks)
    })
    })
}
export {createTask, todayTasks, displayStacksTask}