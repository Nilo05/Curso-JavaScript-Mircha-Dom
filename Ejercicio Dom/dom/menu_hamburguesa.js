/* se expora la funcion */
export default function hamburgerMenu(panelBtn, panel, menuLink){
	const d = document;
	/* funcion para escuchar eventos */
	d.addEventListener("click",(e) => {
		//matches: funcion para delegacion de eventos
		//matches recibe un selector valido de css
		//despues del || aplica matches con el selector valido elemnto *
		//para que tambien se apm¡lique a todo lo que el elemento contiene
		if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
			//selector, entra a lista de clases y aplica toggle para
			//agregar y quitar clases is-active
			d.querySelector(panel).classList.toggle("is-active");
			//para agregar la interaccion del boton (de lineas a x)
			d.querySelector(panelBtn).classList.toggle("is-active");
		}

		//quita las clases agrgadas para que el panel no quede en 
		//pantalla despues de seleccion un elemento del menu
		if (e.target.matches(menuLink)){
			d.querySelector(panel).classList.remove("is-active");
			d.querySelector(panelBtn).classList.remove("is-active");
	
		}
	});
}
