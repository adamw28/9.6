var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var i=document.getElementsByTagName('li').length;
	var element = document.createElement('li');
	element.innerHTML = 'item '+i;
	list.appendChild(element);
}
);