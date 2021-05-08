// Import 
import controlSideNav from "./modules/side-menu-function"

import {createTask, todayTasks} from "./modules/load"

import {openTaskInput, tasksToday, stacksTasks} from "./modules/ui-triggers"


// load load object to store all tasks
createTask();

// collapsable side menu
controlSideNav();

// open task input 
openTaskInput();

// pass display todays tasks function into today dom trigger function
tasksToday(todayTasks);

stacksTasks();






