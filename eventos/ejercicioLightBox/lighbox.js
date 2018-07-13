var menu = document.getElementById('menu');

var botones = document.getElementsByTagName('li');
var velo;
var caja;



for(var i =  0; i<botones.length; i++)
{
	botones[i].addEventListener('click', cargarLighbox);
}

function cargarLighbox(e){
	
	crearLighbox();

	e.preventDefault();
}



function crearLighbox(){

	velo = document.createElement('div');
	velo.setAttribute('class', 'lighbox');

	//creo la caja 

	caja = document.createElement('div');
	caja.setAttribute('class', 'caja');


	velo.appendChild(caja);
	document.body.appendChild(velo);
	

	caja.innerHTML = '<h2>Titulo del lighbox</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet voluptatum fuga rerum eaque, laudantium rem numquam asperiores nam vero amet ipsa natus delectus eligendi quam est veritatis ab totam!</p><div id="cerrar">X</div>'
	var cerrar = document.getElementById('cerrar');
	cerrar.addEventListener('click', cerrarLighbox);
}



function cerrarLighbox(){
	 document.body.removeChild(velo);
}







