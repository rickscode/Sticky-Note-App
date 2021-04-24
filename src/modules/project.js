export default class Project
{
    constructor(name)
    {
        this.name = name;
        this.tasks = [/*push tasks obejects here*/];
    }

  setName(name)    
  {
    this.name = name;
  }

  getName() 
  {
    return this.name;
  }

  settasks(tasks)    
  {
    this.tasks += tasks;
  }

  gettasks() 
  {
    return this.tasks;
  }

  
}