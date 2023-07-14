const day1 = document.getElementById("2023/01/01b")
const valuetest = document.getElementById("2023/01/01v")
const map1 = new Map();
const input = document.getElementById("input")
const secondLog = document.getElementById("secondLog")
const confirmer = document.getElementById("confirmer")
var log = document.getElementById("log")
const dayToday = Date.today()
//------------------------------------------------------------------------------------------------------------
const days = new Map();             //setting days for function findDayOfWeek
days.set ("Mon", 1);                //                               |
days.set ("Tue", 2);                //                               |
days.set ("Wed", 3);                //                               |
days.set ("Thu", 4);                //                               |
days.set ("Fri", 5);                //                               |
days.set ("Sat", 6);                //                              \| /
days.set ("Sun", 7);                //                               \/
//------------------------------------------------------------------------------------------------------------
function findDayOfWeek(dateF) {                           // return us the numerical number of day placement:
    return days.get(dateF.toString().substring(0, 3));    // Mon Tues Wed Thu Fri Sat Sun |
};                                                        //  1   2    3   4   5   6   7 
//------------------------------------------------------------------------------------------------------------


// class Days {
//     constructor(mood) {
//         map1.get(this.id) = mood
//     }

// };

day1.addEventListener("click", 
    function() {
        informer.show();
});
                                                          
input.onclick = function(event){
    log.innerHTML = event.target.id;
    map1.set (this.id, event.target.id);
    confirmer.show();
    if (event.target.id === "input"){
        log.innerHTML = "0";
    } // doesnt matter we will have no spaces 
   
};
confirmer.onclick = function() {
    confirmer.close();
    informer.close();
};


// ------------------how to use the library-----------------------
// console.log(dayToday.toString().substring(0) + 'substring');---
// console.log(dayToday + 'obj');---------------------------------
// console.log(findDayOfWeek(Date.today()) + 'myfunc');-----------
// console.log(Date.today() + 'i love little boys');--------------
//----------------------------------------------------------------