export default class Project
{
    constructor(name)
    {
        this.name = name;
        this.tasks = [{title:"HEHE"}];
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

}