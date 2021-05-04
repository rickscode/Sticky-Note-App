export default class Project
{
    constructor(name)
    {
        this.name = name;
        this.tasks = [];
    }

  setName(name)    
  {
    this.name = name;
  }

  getName() 
  {
    return this.name;
  }

  setTasks(tasks)    
  {
    this.tasks.push(tasks);
  }

  getTasks() 
  {
    return this.tasks;
  }

  removeTask(finishedSticky)
  {
    
    // get index of object with name rick
    var editTask = this.tasks.map(function(item) { return item.title; }).indexOf(finishedSticky);

    // remove object
    this.tasks.splice(editTask, 1);

    
  }

}