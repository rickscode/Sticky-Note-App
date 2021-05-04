// Import 
import controlSideNav from "./modules/side-menu-function"


// Import default objects
import {inbox} from "./modules/load"
import {openTaskInput} from "./modules/ui-triggers"


// load load object to store all tasks
inbox();

// collapsable side menu
controlSideNav();

// open task input 
openTaskInput();







