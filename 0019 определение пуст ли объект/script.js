/*
function isEmpty(obj) {
	//мой код
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false 
*/

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); 