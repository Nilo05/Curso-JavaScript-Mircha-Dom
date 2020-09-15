const d = document;

export default function scrollSpy(){
    // se seleccionan todas las secciones con el atributo que 
    // se agrego para este probles [data-scroll-spy]
    const $section = d.querySelectorAll("section[data-scroll-spy]");

    // el call back que necesita la API IntersectionObserver
    const cb = (entries) => {
        // console.log("Entries: ", entries);

        entries.forEach(entry => {
            // console.log(entry);
            // se toma el atributo id del objeto entry para 
            // referenciar las secciones (menu con secciones)
            const id = entry.target.getAttribute("id")
            // console.log(id);
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove("active");
            }
        })
    }

    // se guarda en uan variable el observador
    const observer = new IntersectionObserver(cb,{
        // root
        // con valores positvios aumenta el margen de interaccion
        // visualiza varias secciones al tiempo
        // rootMargin: "250px",
        // con valores negativos se reduce el margen de interaccion 
        // rootMargin: "-250px",
        // con esta propiedad indico cual es el limite de visualizacion
        // se da en porcentaje 0.5=50%. [0.5,0.75] minimo 50% maximo 75%
        threshold: [0.5,0.75],
    });
    // console.log("observer", observer)

    // se aplica el observador a cada elemento
    $section.forEach(el => observer.observe(el))
}