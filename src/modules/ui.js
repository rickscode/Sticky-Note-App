import ToDo from "./to-do"

// create trigger function

const trigger = document.getElementById("add-todo");
trigger.addEventListener("click", newTd);

// send user input to ToDo object template 

function newTd()
{
    const input = document.getElementById("todo-title").value;
    const newToDo = new ToDo(input); 
    console.table(newToDo);
}


export default newTd;

