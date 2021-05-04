// Import 
import controlSideNav from "./modules/side-menu-function"


// Import default objects
import {createTask} from "./modules/load"

import {openTaskInput} from "./modules/ui-triggers"


// load load object to store all tasks
createTask();

// collapsable side menu
controlSideNav();

// open task input 
openTaskInput();








