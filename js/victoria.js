let ganador= JSON.parse(sessionStorage.getItem("ganador"));
let anuncio= document.querySelector("#anuncio");
anuncio.innerHTML= ganador;