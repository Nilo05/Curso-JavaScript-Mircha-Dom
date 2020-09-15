// video 92
const d = document,
n = navigator,
// informacion del dispositivo del visitante 
ua = n.userAgent;

export default function userDeviceInfo(id){
     const $id = d.getElementById(id),

        // Es importante crear estos objetos para hacer
        // redirecciones o toma de deciciones
            isMobile = {
                // Se busca en userAgent los diferentes sistemas
                // operativos de movil
                android: () => ua.match(/android/i),
                ios: () => ua.match(/iphone|ipad|ipod/i),
                windows: () => ua.match(/windows phone/i),
                // se tienen en cuenta todos los sistemas Oper.
                // cualquier sistema opr valido para movil
                any: function(){
                    return this.android() || this.ios() || this.windows();
                },
            },
            isDesktop = {
                linux: () => ua.match(/linux/i),
                mac: () => ua.match(/mac os/i),
                windows: () => ua.match(/windows nt/i),
                any: function(){
                    return this.linux() || this.mac() || this.windows();
                },
            },
            isBrowser = {
               chrome: () => ua.match(/chrome/i),
               safari: () => ua.match(/safari/i),
               firefox: () => ua.match(/firefox/i),
               opera: () => ua.match(/opera|opera mini/i),
               ie: () => ua.match(/msie|iemobile/i),
               edge: () => ua.match(/edge/i),
               any: function(){
                   return (
                       this.ie() ||
                       this.edge() ||
                       this.chrome() ||
                       this.safari() ||
                       this.firefox() ||
                       this.opera()
                       )                 
               },
            };
    // console.log(ua);
    $id.innerHTML = `
    <ul>
       <li>User Agent: <b> ${ua} </b></li> 
       <li>Plataforma: <b> ${isMobile.any()?isMobile.any():isDesktop.any()} </b></li>    
       <li>Navegador: <b> ${isBrowser.any()} </b></li>     
    </ul>
    `
    // contenido exclusivo 
    // Solo en chrome
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    } 
    // solo en Firefox   
    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`
    }
    
    // Ejemplo para que se identifique un sistema operativo y 
    // se descarge directamente el software para el mismo
    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para linux</mark></p>`
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`
    }

    // Redirecciones
    // si es android redirecciona a la pagina de mircha
    
    // if(isMobile.android()){
    //     window.location.href = "https://jonmircha.com";
    // }
}