
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

        let inboxStickyName = document.createElement("p");
        let inboxStickyDate = document.createElement("p");
        
        inboxStickyName.textContent = item.title;
        inboxStickyDate.textContent = item.date;
        
        testSticky.appendChild(inboxStickyName);
        testSticky.appendChild(inboxStickyDate);
    }
)};

export {closeTaskWindow, displayInboxTasks}