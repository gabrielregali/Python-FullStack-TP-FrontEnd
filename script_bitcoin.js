function chequeo(){
    if(!correo.value.includes("@") || !correo.value.includes(".com")){
    confirm("Ingrese un email válido")}
    };

let correo= document.getElementById("email");
correo.addEventListener("change", chequeo);


const api_url_usd="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
const api_url_ars="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars"


async function traerPrecioBitcoinUSD(){
    const response = await fetch(api_url_usd)
    const data = await response.json()
    console.log(data)

    const btcUsd= data.bitcoin.usd
    console.log("Precio bitcoin: "+btcUsd)
    document.getElementById("dolares").textContent="Precio Bitcoin (USD): "+btcUsd
    
}

async function traerPrecioBitcoinARS(){
    const response2 = await fetch(api_url_ars)
    const data2 = await response2.json()
    console.log(data2)

    const btcArs= data2.bitcoin.ars
    console.log("Precio bitcoin: "+btcArs)
    document.getElementById("pesos").textContent="Precio Bitcoin (ARS): "+btcArs
    
}

let i=0
if (i==0) {
    traerPrecioBitcoinUSD()
    traerPrecioBitcoinARS()
    i++
}

setInterval(traerPrecioBitcoinUSD, 60000)
setInterval(traerPrecioBitcoinARS, 60000)


















