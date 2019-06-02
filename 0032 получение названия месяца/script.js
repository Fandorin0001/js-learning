/*

Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

Например:

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

я сделал наалогично, только месяц

*/

function getWeekDay(month) {
	var months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

 return months[month.getMonth()];
}

var month = new Date(2019, 5 - 1, 15);

alert(getWeekDay(month) );