var menu = document.getElementById('menu');
var botones = menu.getElementsByTagName('li'); //botones es un lista de elementos
var contenedor = document.getElementById('contenedor');


//recorro la lista de botones y les añado el escuchador del evento de click.

for(var i= 0; i<botones.length; i++)
{
	botones[i].addEventListener('click', cargaSeccion);
}

function cargaSeccion(event){
	 var seccion = this.innerText;

	 seccion = seccion.toLowerCase();

	 cargaImagenes(listadoImagenes, seccion);
}

/* Crearme una funcion que si yo le paso un string con la seccion que quiero carga me saque las fotos de dicha sección. Me voy crear una variable con el numero de imagenes totales que tiene la carpeta images */
 var listadoImagenes = new Array('perros_0','perros_1','perros_2','gatos_3','gatos_4','periquito_5','periquito_6');

function cargaImagenes(pLista, pSeccion)
{
	contenedor.innerHTML = "";
	for(var i=0; i<pLista.length; i++)
	{
		if(pLista[i] == pSeccion+"_"+i)
		{
			var img = document.createElement('img');
			var src = document.createAttribute('src');
			src.value = "images/"+pSeccion+"_"+i+".jpg";
			img.setAttributeNode(src);
			

			contenedor.appendChild(img);	
		}
			
	} 

}


	


