// Import classes
import Project from "./modules/project"
import Task from "./modules/task"
import Goal from "./modules/goal"
import controlSideNav from "./modules/side-menu-function"


// Import objects
import load from "./modules/load"
import {openTaskInput} from "./modules/ui-triggers"


// load load object to store all tasks
load();

// collapsable side menu
controlSideNav();

// open task input 
openTaskInput();



