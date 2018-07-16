var menu = document.getElementById('menu');

var botones = document.getElementsByTagName('li');
var velo;
var caja;



for(var i =  0; i<botones.length; i++)
{
	botones[i].addEventListener('click', cargarLighbox);
}

function cargarLighbox(e){
	
	crearLighbox(this);

	e.preventDefault();
}



function crearLighbox(pObjectBoton){

	var tipo = pObjectBoton.dataset.tipo;

	var url = pObjectBoton.innerText;
	url = url.toLowerCase();

	/* url = url.split(" ");

	url = url[0]+url[1];

	alert(url) */


	url = url.replace(" ","");


	velo = document.createElement('div');
	velo.setAttribute('class', 'lighbox');

	//creo la caja 

	caja = document.createElement('div');
	caja.setAttribute('class', 'caja');


	velo.appendChild(caja);
	document.body.appendChild(velo);
	

	if(tipo == "texto")
	{
		caja.innerHTML = '<object type="text/html" data="'+url+'.html" ></object><div id="cerrar">X</div>'
	}
	else if(tipo == "imagen"){
		
		caja.innerHTML = '<img src="'+pObjectBoton.dataset.imagen+'"><div id="cerrar">X</div>'
	}
	
	var cerrar = document.getElementById('cerrar');
	cerrar.addEventListener('click', cerrarLighbox);
}



function cerrarLighbox(){
	 document.body.removeChild(velo);
}







