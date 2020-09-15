// se importa funcion menu de hamburguesa
//importar con funcion por default (una sola)
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import {shortcuts,moveBall} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";



const d = document;
//evento carga del documento
d.addEventListener("DOMContentLoaded", (e) => {
	// la funcion recibe el selector y el elemento a mover
	hamburgerMenu(".panel-btn",".panel",".menu a");
	digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
	alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
	countdown("countdown","May 27, 2021 00:00:00","Feliz Cumpleaños Danilo");
	scrollTopButton(".scroll-top-btn");	
	responsiveMedia("youtube",
	"(min-width: 1024px)",
	`<a href="https://www.youtube.com/embed/2SetvwBV-SU" 
	target="_blank" rel="noopener">Ver video javascript</a>`,
	`<iframe width="560" height="315" 
	src="https://www.youtube.com/embed/2SetvwBV-SU" 
	frameborder="0" allow="accelerometer; autoplay; 
	encrypted-media; gyroscope; picture-in-picture" 
	allowfullscreen></iframe>`);
	responsiveMedia("gmaps",
	"(min-width: 1024px)",
	`<a href="https://goo.gl/maps/okS2Dmqzo8PysWgk9" 
	target="_blank" rel="noopener">Ver Mapa catedral</a>`,
	`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.
	222327905318!2d-75.51722009999996!3d5.067679599999998
	!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e
	476ffa140f94a5%3A0x25810bc036523ce7!2sCatedral%20bas%C3
	%ADlica%20de%20Nuestra%20Se%C3%B1ora%20del%20Rosario%20
	de%20Manizales!5e0!3m2!1ses-419!2sco!4v1599065748722!5
	m2!1ses-419!2sco" width="600" height="450" 
	frameborder="0" style="border:0;" allowfullscreen="" 
	aria-hidden="false" tabindex="0"></iframe>`);
	responsiveTester("responsive-tester");
	userDeviceInfo("user-device");
	webCam("webcam");
	getGeolocation("geolocation");
	searchFilters(".card-filter",".card");
	draw("#winner-btn",".player");
	slider();
	scrollSpy();
	smartVideo();
	contactFormValidations();
	
})

d.addEventListener("keydown",(e)=>{
	shortcuts(e);
	moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();

