// project object template class that can hold tasks
// project module 
export default class Project
{
    constructor(name, task)
    {
        this.name = name;
        this.task = [/*push task obejects here*/];
    }
}

// create project object from input
// triggers module 

const projectTrigger = document.getElementById("add-project");
projectTrigger.addEventListener("click", newProject); 

function newProject()
{
    const input = document.getElementById("project-name").value;
    const project = new Project(input); 
    console.table(project);
}