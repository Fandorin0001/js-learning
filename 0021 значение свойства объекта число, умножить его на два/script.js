/*
// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
//проверка на число
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// если значение свойства объекта число, умножить его на два
function multiplyNumeric(obj) {
	for (var key in obj) {
		if(isNumeric(obj[key])) {
			obj[key] *= 2;
		}
	}
}
multiplyNumeric(menu);