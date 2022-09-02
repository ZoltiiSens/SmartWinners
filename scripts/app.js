function openquestion(elem, i) {
	elem.addEventListener('click', () => {
		document.querySelector(`.open-${i}`).classList.toggle('rotated');
		document.querySelector(`.answer-${i}`).classList.toggle('opened');
	});
}

document.querySelectorAll('.question').forEach(openquestion);
document.querySelector('.closer-box').addEventListener('click', () => {
	document.querySelector('.phone-nav').style.left = '-100%';
});
document.querySelector('.nav').addEventListener('click', () => {
	document.querySelector('.phone-nav').style.left = '0%';
});
