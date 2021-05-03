
// Close and reset input value

function closeTaskWindow()
{
    const taskWindow = document.getElementById("input-container");
    const taskInputWindow = document.getElementById("todo-title");
    
    taskWindow.style.visibility="hidden";
    taskInputWindow.value = "";
}

// Display inbox tasks 

function displayInboxTasks(inboxTasks)
{
    const testSticky = document.getElementById("task-container");

    inboxTasks.forEach(function(item)
    {

        let inboxTaskSticky = document.createElement("p");
        inboxTaskSticky.textContent = item.title;
        testSticky.appendChild(inboxTaskSticky);
        
    }
)};

export {closeTaskWindow, displayInboxTasks}