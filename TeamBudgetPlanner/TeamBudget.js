var map = new Map();

function add(empID, expense) {
    if (map.has(empID)) {
        value = map.get(empID);
        map.set(empID, expense + value);
    }
    else {
        map.set(empID, expense);
    }
}
function remove(empID) {
    if (map.entries(empID)) {
        console.log("The Deleted expenses is:" + map.delete(4));

    }

}
function show() {


    for (let [empID, expense] of map) {
        console.log(empID + " = " + expense);
    }
}
function calculateBudget(empID) {
    for (let [empID, expense] of map){
        if (map.entries(empID)) {
            total=expense*12;
           // console.log( "The Anual Expense is Employee:"+total);
        }
        console.log( "The Anual Expense is Employee:"+total);
    }
   // console.log( "The Anual Expense is Employee:"+total);
}
add(1, 10000);
add(1, 2000);
add(2, 15000);
add(3, 30000);
add(4, 25000);
add(5, 32000);
add(6, 35000);



console.log(map);
 remove();
 console.log(map);
 show();
 console.log(map);
 calculateBudget(1);

 calculateBudget(2);

 calculateBudget(3);
 calculateBudget(4);
 calculateBudget(5);
 calculateBudget(8);



console.log(map);
//document.write(map);
