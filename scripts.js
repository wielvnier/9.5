var newElem1 = document.createElement('button');
var newElem2 = document.createElement('button');
var newElem3 = document.createElement('button');

newElem1.innerText = 'Hello';
newElem2.innerText = 'Hi';
newElem3.innerText = 'Good morning';

newElem1.className += 'button';
newElem2.className += 'button';
newElem3.className += 'button';

var body = document.getElementsByTagName('body');
body[0].appendChild(newElem1);
body[0].appendChild(newElem2);
body[0].appendChild(newElem3);

var buttons = document.getElementsByClassName('button');

function alertElements(btns) {
	for (var i = 0; i < btns.length; i++) {
        alert(btns[i].innerText);
	}
}

alertElements(buttons);