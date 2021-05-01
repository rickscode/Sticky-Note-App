
// Close and reset input value

export default function closeTaskWindow()
{
    const taskWindow = document.getElementById("input-container");
    const taskInputWindow = document.getElementById("todo-title");
    
    taskWindow.style.visibility="hidden";
    taskInputWindow.value = "";
}

