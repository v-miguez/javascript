
//funcion que filtra la edad de cualquier lista.

function filtrarEdad(pLista, pEdad)
{
	main.innerHTML = "";
	var contador = 0;
	for(var i = 0; i< pLista.length; i++)
	{
		if(pLista[i]['edad'] == pEdad)
		{
			main.innerHTML += '<div class="ficha"><h3>'+pLista[i]['nombre']+'</h3><h4>'+pLista[i]['diagnostico']+'</h4><p>'+pLista[i]['edad']+'</p><p>'+pLista[i]['numeross']+'</p></div>';
			contador++;
		}
	}
	if(contador == 0)
	{
		main.innerHTML = "No existen resultados con esos parametros"
 	}
}


//funcion que filtra la diagnostico de cualquier lista.

function filtrarDiagnostico(pLista, pDiagnostico)
{
	
	main.innerHTML = "";
	var contador = 0;
	for(var i=0 ; i< pLista.length ; i++)
	{
		if(pLista[i]['diagnostico'] == pDiagnostico){
		main.innerHTML += '<div class="ficha"><h3>'+pLista[i]['nombre']+'</h3><h4>'+pLista[i]['diagnostico']+'</h4><p>'+pLista[i]['edad']+'</p><p>'+pLista[i]['numeross']+'</p></div>';
		contador++;
		}
	}
	if(contador == 0)
	{
		main.innerHTML = "No existen resultados";
	}

}


