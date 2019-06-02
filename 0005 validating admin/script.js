var user = prompt("Введите логин", "");

if (user == "admin") {
	var adminPassword = prompt("введите пароль", "");
	if (adminPassword == "admin") {
		alert("hello my dear lord");
	} else if (adminPassword == null) {
		alert("ввод пароля отменён");
	} else {
		alert("пароль неверный");
	}
} else if (user == null) {
	alert("ввод отменён");
} else {
	alert("логин неверный");
}




