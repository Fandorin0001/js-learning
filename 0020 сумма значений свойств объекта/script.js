/*
"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650 
*/

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250,
  "Миша": 0
};
var sum = 0;
for (var prop in salaries) {
	sum += salaries[prop];
}
alert(sum);

