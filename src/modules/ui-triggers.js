// import Task from "./task"
// import Project from "./project"

function openTaskInput()
{
    const openButton = document.getElementById("open-tf");
    openButton.addEventListener("click", open);

    function open(){
        const inputVisibility = document.getElementById("input-container");
        inputVisibility.style.visibility = "visible";
    }
}

export {openTaskInput}
// export default function newTask()
// {
//     const taskInput = document.getElementById("todo-title").value;
//     const task = new Task(taskInput); 
//     console.table(task);
    
// }

// new project
// const projectTrigger = document.getElementById("add-project");
// projectTrigger.addEventListener("click", newProject); 

// export function newProject()
// {
//     const projectInput = document.getElementById("project-name").value;
//     const project = new Project(projectInput); 
//     console.table(project);
// }











