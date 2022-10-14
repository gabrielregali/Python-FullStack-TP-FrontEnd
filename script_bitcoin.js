function chequeo(){
    if(!correo.value.includes("@") || !correo.value.includes(".com")){
    confirm("Ingrese un email válido")}
    };

let correo= document.getElementById("email");
correo.addEventListener("change", chequeo);




















