(()=>{"use strict";class e{constructor(e){this.name=e,this.tasks=[]}setName(e){this.name=e}getName(){return this.name}settasks(e){this.tasks+=e}gettasks(){return this.tasks}}!function(){const t=new e("inbox");console.table(t)}(),document.getElementById("close").addEventListener("click",(function(){document.getElementById("left-menu").style.width="0",document.getElementById("close").style.visibility="hidden",document.getElementById("stack-list").style.display="none"})),document.getElementById("dmt-eye").addEventListener("click",(function(){document.getElementById("left-menu").style.width="300px",document.getElementById("close").style.visibility="visible",document.getElementById("stack-list").style.display="revert"}))})();