$(document).ready(function(e) {
	var hamnav = document.getElementById('icon');
	var dona = document.getElementById('hud');
	var overlay = document.getElementById('overlay'), // se asignan las variables de carga
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
	
	overlay.classList.add('active');// Se activa el overlay  y el pop-up cuando se 
	popup.classList.add('active');// carga el documento
	
	btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
	});
	
	dona,addEventListener('click', function(e){
		overlay.classList.remove('active');
		popup.classList.remove('active');
	});
	
    hamnav.addEventListener('click', function(e){
		$("#leftNav").toggleClass("resp"); // Se agrega la clase resp para desplegar el menu
	});
});