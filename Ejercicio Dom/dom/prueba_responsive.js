// video 91
const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit",e=>{
        // if(e.target.matches($form){}
        // otra forma de hacer la misma comparacion anterior
        if (e.target === $form){
            // hay que cancelar la accion por defecto de un 
            // formulario (enviar la informacion)
            e.preventDefault();

            // abrir ventana
            tester = window.open($form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
                );
        }
    });
    
    d.addEventListener("click", e =>{
        if(e.target === $form.cerrar) tester.close();
        
    });
}