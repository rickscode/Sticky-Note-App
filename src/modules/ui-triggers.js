import {displayStacksTask} from "./load"

function stacksTasks()
{
    const stacksTrigger = document.getElementById("stacks");
    stacksTrigger.addEventListener("click", displayStacksTask)
}


function openTaskInput()
{
    const openButton = document.getElementById("open-tf");
    openButton.addEventListener("click", open);

    function open(){
        const inputVisibility = document.getElementById("input-container");
        inputVisibility.style.visibility = "visible";
    }
}

function tasksToday(today)
{
    const todayTrigger = document.getElementById("today");
    todayTrigger.addEventListener("click", today)
}

export {openTaskInput, tasksToday, stacksTasks}









