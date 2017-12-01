var list = document.getElementById('list');
var add = document.getElementById('addElem');
var i=1;
add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ';
	element.innerHTML += i;
	i++;
	//wydaje mi się, że tak jest łatwiej niż używając getElementsByTagName.length
	list.appendChild(element);
}
);