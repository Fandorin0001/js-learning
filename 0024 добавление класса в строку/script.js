/*
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
*/

function addClass(obj, cls) {
	var classes = obj.className ? obj.className.split(' ') : [];

	for(var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) return;
	}

	classes.push(cls);

	obj.className = classes.join(' ');
}

var obj = {
  className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me


