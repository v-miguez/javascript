var menuPrincipal = document.getElementById('menu');

//var botones = new Array();

var botones = menuPrincipal.getElementsByTagName('li');
var contenedor = document.getElementById('contenido');


for(var i=0; i<botones.length; i++)
{

	botones[i].addEventListener('click', lanzarEvent);

}

function lanzarEvent(e)
{
	var divs = contenedor.getElementsByTagName('div'); //divs es un ARRRRRRARAAYA¡

	for(var i= 0; i<divs.length; i++)
	{
		divs[i].style.display = "none";
	}

	var seccion  = this.getAttribute('rel');
	document.getElementById(seccion).style.display = "block";
	
	e.preventDefault();
}


function bloquear(){
	alert('bloqueando');
	return true;
}
