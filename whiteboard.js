// function is callin * number clicked e.g if click sticky second loop
// runs twice

// re write for radio input 

function finishTask(){
    let testTrigger = document.querySelectorAll(".sticky-note");
    testTrigger.forEach((item) => {
    
    item.addEventListener("click", function(e)
    {
        // node list of child elements
        let stickyNodeList = e.target.children
        // array from nodelist
        let stickyArr = Array.from(stickyNodeList);
        // remove last two elements to leave title string array
        stickyArr.splice(stickyArr.length - 2, 2);
        // access title string
        let finishedSticky = stickyArr[0].textContent;
       
        //console.log(finishedSticky)
    
        inbox.removeTask(finishedSticky);
        console.log(inbox);
    
    })
    })
    
    }
