var enterNumber = prompt("Введите любое число", "");
if (enterNumber > 0) {
	alert("1");
} else if (enterNumber == 0) {
	alert("0");
} else if (enterNumber < 0) {
	alert("-1");
} else if (enterNumber == null) {
	alert('ввод числа отменён');
} else {
	alert("is not number");
}