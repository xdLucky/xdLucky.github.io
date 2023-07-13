const day1 = document.getElementById("2023/01/01b")
const valuetest = document.getElementById("2023/01/01v")
const map1 = new Map();
const input = document.getElementById("input")
const secondLog = document.getElementById("secondLog")
const confirmer = document.getElementById("confirmer")
var log = document.getElementById("log")
const dayToday = Date.today()
const days = new Map();
days.set ("Mon", 1);
days.set ("Tue", 2);
days.set ("Wed", 3);
days.set ("Thu", 4);
days.set ("Fri", 5);
days.set ("Sat", 6);
days.set ("Sun", 7);


// class Days {
//     constructor(mood) {
//         map1.get(this.id) = mood
//     }

// };

day1.addEventListener("click", 
    function() {
        informer.show();
});
function findDayOfWeek(dateF) {
    toString(dateF);
    console.log(days.get(dateF.substring(0, 3)));
    
     return days.get(dateF.substring(0, 3));
     
};

input.onclick = function(event){
    log.innerHTML = event.target.id;
    map1.set (this.id, event.target.id);
    confirmer.show();
    if (event.target.id === "input"){
        log.innerHTML = "0";
    } // doesnt matter we will have no spaces 
   
};
confirmer.onclick = function(event){
    console.log(Date.today + 'i love little boys');
    confirmer.close();
    informer.close();
    console.log(toString(dayToday).substring(0) + 'substring');
    console.log(dayToday + 'obj');
    console.log(findDayOfWeek(Date.today()) + 'myfunc');
    
};
