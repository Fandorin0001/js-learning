/*
var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

var number = prompt('hello?!', '');
switch (number) {
	case '0':
		alert('0');
		break;
	case '1':
		alert('1');
		break;
	case '2':
	case '3':
		alert('2, 3');
		break;
	case null:
		alert('ввод отменён');
		break;
	default:
		alert('очень интересное число больше 3');
		break;
}