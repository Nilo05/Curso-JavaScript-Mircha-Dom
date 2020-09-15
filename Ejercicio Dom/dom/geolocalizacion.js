// video 95
const d = document,
n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        // por defecto en false. con true se busca que el sipositivo haga 
        // la mejor lectura. 
        enableHighAccuracy:true,
        timeout: 5000,
        // para que no se guarden en cache las lecturas
        maximumAge:0
    };

    const success = (position) => {
        let coords = position.coords;
        // console.log(position);

        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy} metros</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},
        20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success,error,options);

}