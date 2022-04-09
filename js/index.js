
const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	burgerLine = document.querySelectorAll('.menu_burger_line');

function useBurger() {
	menu.classList.toggle('active');
	burgerLine.forEach(item => {
		item.classList.toggle('active');
	});
}

burger.addEventListener('click', useBurger);
