
// Close and reset input value

function closeTaskWindow()
{
    const taskWindow = document.getElementById("input-container");
    const taskInputWindow = document.getElementById("todo-title");
    
    taskWindow.style.visibility="hidden";
    taskInputWindow.value = "";
    // clear dom
    // let clearDomStickies = document.getElementById("task-container");
    // clearDomStickies.innerHTML = '';
}

// Clear inbox tasks
function clearTaskContainer()
    {
    console.log("clear")
    const taskBoard = document.getElementById("task-container");
    taskBoard.innerHTML = '';
    }

// remove clicked task from dom 
function removeSticky()
{
    const taskContainer = document.getElementById("task-container");
    taskContainer.addEventListener("click", function(e)
    {
        if(e.target.className == "sticky-note")
        {
            const test = e.target;
            //console.log("hello");
            test.remove();
        }
    })
}



// Display inbox tasks 

function displayInboxTasks(inboxTasks)
{
    
    const testSticky = document.getElementById("task-container");
    
    inboxTasks.forEach(function(item)
    {

        const inboxStickyNote = document.createElement("div");
        inboxStickyNote.id = "sticky-note";
        inboxStickyNote.className = "sticky-note";

        const inboxStickyName = document.createElement("p");
        const inboxStickyDate = document.createElement("p");
        //const finishedTask = document.createElement("input");
        //finishedTask.type = "radio";
                
        inboxStickyName.textContent = item.title;
        inboxStickyDate.textContent = item.date;
        //finishedTask.textContent = "Done";

        inboxStickyNote.appendChild(inboxStickyName);
        inboxStickyNote.appendChild(inboxStickyDate);
        //inboxStickyNote.appendChild(finishedTask);

        testSticky.appendChild(inboxStickyNote);

        //closeTaskWindow()

    }

)};


export {closeTaskWindow, displayInboxTasks, clearTaskContainer, removeSticky}

