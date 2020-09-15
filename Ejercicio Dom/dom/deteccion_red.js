// video 93
const d = document,
w = window,
n = navigator;

export default function networkStatus(){
    // Funcion que controla el texto y la clase
    // en el momento de conexion y desconexion
    const isOnLine = () => {
      const $div = d.createElement("div");  
      if (n.onLine){
          $div.textContent = "Conexión Reestablecida";
          $div.classList.add("online");
          $div.classList.remove("offline");
      }else{
        $div.textContent = "Conexión Perdida";
        $div.classList.add("offline");
        $div.classList.remove("online");   
      } 
      d.body.insertAdjacentElement("afterbegin",$div)
      setTimeout(() => d.body.removeChild($div), 2000); 
    }

    // Escucha el evento online y offline creados.
    w.addEventListener("online",e => isOnLine());
    w.addEventListener("offline",e => isOnLine());
}