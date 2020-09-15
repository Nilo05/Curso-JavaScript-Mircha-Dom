const d = document,
n = navigator;
export default function webCam(id){
    const $video = d.getElementById(id);
    
    if(n.mediaDevices.getUserMedia){
        // la siguiente funcion es una promesa
        n.mediaDevices.getUserMedia({video:true,audio:false})
        .then((stream) => {
            // console.log(stream);
            $video.srcObject = stream;
            $video.play()
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`)
            // console.log(`¡Sucedio el siguiente error!: ${err}`)
            });
    }
}