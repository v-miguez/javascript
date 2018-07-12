var nombres = new Array('Juan','Jeni','Ines','Victor','Ivan','Santi', 'Jorge','Gustavo', 'Luis', 'Mario','Pepe');
			var apellidos = new Array('Perez','Garcia','Villalba','Miguez','Del Campo','Iñigo', 'Ronald','Vallejo', 'Martinez', 'Giron','Rodriguez');
			var edad = new Array(55,18,24,40,29,39, 15,23, 33, 25, 34);
			var diagnostico = new Array('miopia', 'cefalea', 'conjuntivitis','gripe', 'cefalea', 'miopia','conjuntivitis', 'migraña', 'miopia', 'gripe','conjuntivitis');
			var numeross = new Array(2354,5435,3476,5670,1235,3450,6730,1237,6666,4324, 9807);

			var listaPacientes = new Array();

			for(var i=0; i<nombres.length; i++){

				listaPacientes[i] = {
					"nombre": nombres[i],
					"apellido" : apellidos[i],
					"edad": edad[i],
					"diagnostico": diagnostico[i],
					"numeross" : numeross[i]
				}

			}





function filtrarDiagnostico(pLista, pDiagnostico)
{
	var main = document.getElementById('main');

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

filtrarDiagnostico(listaPacientes, 'miopia');



