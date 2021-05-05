function closeit(){

let testTrigger = document.querySelectorAll(".sticky-note");
testTrigger.addEventListener()
    testTrigger.forEach((item) => {
    
    item.addEventListener("click", test(e))})
}
        
    function test(e){
        let stickyNodeList = e.target.children
    
        let stickyArr = Array.from(stickyNodeList);
        //console.log(stickyArr)
        stickyArr.splice(1, 1);
    
        let finishedSticky = stickyArr[0].textContent;
    
        console.log(finishedSticky)
    
        inbox.removeTask(finishedSticky);
        console.table(inbox);
    }




    let testTrigger = document.querySelectorAll(".sticky-note");
    testTrigger.forEach((item) => {
    
    item.addEventListener("click", function(e)
    {
        
        let stickyNodeList = e.target.children
    
        let stickyArr = Array.from(stickyNodeList);
        //console.log(stickyArr)
        stickyArr.splice(1, 1);
    
        let finishedSticky = stickyArr[0].textContent;
    
        console.log(finishedSticky)
    
        inbox.removeTask(finishedSticky);
        console.table(inbox);

        
    
    })
    })
