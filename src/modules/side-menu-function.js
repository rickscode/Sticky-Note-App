export default function controlSideNav()

{

const closeTrigger = document.getElementById("close");
closeTrigger.addEventListener("click", closeNav);

    function closeNav() 
          {
            document.getElementById("left-menu").style.width = "0";
            document.getElementById("close").style.visibility = "hidden";
            document.getElementById("stack-list").style.display = "none";
          }

const openTrigger = document.getElementById("dmt-eye");
openTrigger.addEventListener("click", openNav);

    function openNav() 
          {
            document.getElementById("left-menu").style.width = "300px";
            document.getElementById("close").style.visibility = "visible";
            document.getElementById("stack-list").style.display = "revert";
          }
}