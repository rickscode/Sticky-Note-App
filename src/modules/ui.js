import ToDo from "./task"
import Project from "./project"

// new task

const trigger = document.getElementById("add-task");
trigger.addEventListener("click", newTd);

export function newTd()
{
    const input = document.getElementById("todo-title").value;
    const newToDo = new ToDo(input); 
    console.table(newToDo);
}


// new project
const projectTrigger = document.getElementById("add-project");
projectTrigger.addEventListener("click", newProject); 

export function newProject()
{
    const input = document.getElementById("project-name").value;
    const project = new Project(input); 
    console.table(project);
    console.log(project.name);
}



