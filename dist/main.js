(()=>{"use strict";class t{constructor(t,e){this.title=t,this.date=e}}const e=new class{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks.push(t)}getTasks(){return this.tasks}removeTask(t){var e=this.tasks.map((function(t){return t.title})).indexOf(t);this.tasks.splice(e,1)}}("inbox"),n=e.tasks;document.querySelectorAll(".sticky-note"),document.getElementById("add-task").addEventListener("click",(function(){const s=document.getElementById("todo-title").value,i=document.getElementById("todo-date").value,c=new t(s,i);(function(){const t=document.getElementById("input-container"),e=document.getElementById("todo-title");t.style.visibility="hidden",e.value=""})(),function(t){e.setTasks(t),console.log(e),function(t){const e=document.getElementById("task-container");e.innerHTML="",t.forEach((function(t){const n=document.createElement("div");n.id="sticky-note",n.className="sticky-note";const s=document.createElement("p"),i=document.createElement("p");s.textContent=t.title,i.textContent=t.date,n.appendChild(s),n.appendChild(i),e.appendChild(n)}))}(n),document.querySelectorAll(".sticky-note").forEach((t=>{t.addEventListener("click",(function(t){let n=t.target.children,s=Array.from(n);s.splice(1,1);let i=s[0].textContent;console.log(i),e.removeTask(i),console.log(e)}))}))}(c)})),document.getElementById("close").addEventListener("click",(function(){document.getElementById("left-menu").style.width="0",document.getElementById("close").style.visibility="hidden",document.getElementById("stack-list").style.display="none"})),document.getElementById("dmt-eye").addEventListener("click",(function(){document.getElementById("left-menu").style.width="300px",document.getElementById("close").style.visibility="visible",document.getElementById("stack-list").style.display="revert"})),document.getElementById("open-tf").addEventListener("click",(function(){document.getElementById("input-container").style.visibility="visible"}))})();