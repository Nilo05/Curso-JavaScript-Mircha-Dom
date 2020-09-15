// video 96

const d = document;

export default function searchFilters(input,selector){
   d.addEventListener("keyup",e => {
       if(e.target.matches(input)){
           // console.log(e.key);
           // aqui se va acumulando el valor de cada letra formando 
           // una cadena
           // console.log(e.target.value);

            if(e.key === "Escape") e.target.value = "";         

           d.querySelectorAll(selector).forEach(el => {
               (el.textContent.toLowerCase().includes(e.target.value))
               ?el.classList.remove("filter")
               :el.classList.add("filter"); 
           })
       }
   })
}