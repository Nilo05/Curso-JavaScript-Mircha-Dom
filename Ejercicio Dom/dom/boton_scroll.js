const d = document;
const w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    
    w.addEventListener("scroll",e=>{
        // estos metodos me dicen en que punto despues de top se 
        // encuentra el scroll
        //console.log(w.pageYOffset, d.documentElement.scrollTop);
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 500){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }

    });
    d.addEventListener("click",e=>{
        if (e.target.matches(btn)){
            //d.documentElement.scrollTop = 0;
            w.scrollTo({
                behavior: "smooth",
                top: 0,
               // left: 0
            })
        }
    });
}