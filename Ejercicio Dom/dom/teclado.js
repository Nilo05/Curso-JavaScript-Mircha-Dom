const d = document;
// es muy importante en el evento que se muestra en la consola
// la propiedad keyCode (codigo de la letra oprimida)
export function shortcuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);


    if(e.key === 'a' && e.ctrlKey){
        alert('Haz lanzado una alerta con el teclado')
    }

    if(e.key === 'c' && e.ctrlKey){
        confirm('Haz lanzado una confirmacion con el teclado')
    }

    if(e.key === 'p' && e.ctrlKey){
        prompt('Haz lanzado un aviso con el teclado')
    }

}

let x = 0,
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitBall = $ball.getBoundingClientRect(),
        limitstage = $stage.getBoundingClientRect();
        // console.log(e.keyCode);
        // console.log(limitBall,limitstage);

    switch (e.keyCode){
        case 37:
            if(limitBall.left > limitstage.left){
                x--;
                e.preventDefault();
            } 
        break;
        case 38:
            if(limitBall.top > limitstage.top){
                y--;
                e.preventDefault();
            } 
        break;
        case 39:
            if(limitBall.right < limitstage.right){
                x++;
                e.preventDefault();  
            } 
        break;
        case 40:
            if(limitBall.bottom < limitstage.bottom) {
                y++;
                e.preventDefault();
            } 
        break;
        default:
        break;    
    }  
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;  


}