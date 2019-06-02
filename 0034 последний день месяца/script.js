/*

Последний день месяца?
важность: 5
Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

Параметры:

year – 4-значный год, например 2012.
month – месяц от 0 до 11.
Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

*/

function getLastDayOfMonth(year, month) {
	var day = new Date(year, month + 1, 0);

	return day.getDate();
}

alert(getLastDayOfMonth(2019, 5) );



