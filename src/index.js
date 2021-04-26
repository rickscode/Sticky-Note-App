// Import classes
import Project from "./modules/project"
import Task from "./modules/task"
import Goal from "./modules/goal"
import controlSideNav from "./modules/side-menu-function"


// Import objects
import inbox from "./modules/inbox"
import {openTaskInput} from "./modules/ui-triggers"


// default inbox object to store all tasks
inbox();

// collapsable side menu
controlSideNav();

// open task input 
openTaskInput();



