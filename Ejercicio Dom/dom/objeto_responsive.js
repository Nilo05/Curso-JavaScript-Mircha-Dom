const d = document,
      w = window;
// mq es un media query
export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    let breakpoint = w.matchMedia(mq);
     
    const responsive = (e) =>{
        //funcion que revisa el media Query (true o flase)
       if(e.matches){
           d.getElementById(id).innerHTML = desktopContent;
       }else{
           d.getElementById(id).innerHTML = mobileContent;
       }
       //console.log("MQ",breakpoint,e.matches);
    } 
    //funcion que escucha la funcion anterior
    breakpoint.addListener(responsive);

    //para que llame la funcion desde la primera carga de la pagina
    //la funcion recibe una media query
    responsive(breakpoint);
}      