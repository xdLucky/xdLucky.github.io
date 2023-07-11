const day1 = document.getElementById("2023/01/01b")
const valuetest = document.getElementById("2023/01/01v")
const map1 = new Map();
const input = document.getElementById("input")
const secondLog = document.getElementById("secondLog")
const confirmer = document.getElementById("confirmer")
var log = document.getElementById("log")


day1.addEventListener("click", 
    function() {
        informer.show();
        
        
        // document.getElementById("log").ninerHTML = this.id;
});

input.onclick = function(event){
    log.innerHTML = event.target.id;
    map1.set (this.id, event.target.id);
    //secondLog.innerHTML = map1.get("2023/01/01");
    confirmer.show();
    if (event.target.id === "input"){
        log.innerHTML = "0";
    } // doesnt matter we will have no spaces 
   
};
confirmer.onclick = function(event){
    confirmer.close();
    informer.close();
    secondLog.innerHTML = "true"
};
