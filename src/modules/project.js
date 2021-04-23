export default class Project
{
    constructor(name)
    {
        this.name = name;
        this.task = [/*push task obejects here*/];
    }

  setName(name)    
  {
    this.name = name;
  }

  getName() 
  {
    return this.name;
  }
}