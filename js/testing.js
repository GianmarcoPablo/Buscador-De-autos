const resultado = document.querySelector("#resultado")

cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",()=>{
        mostrarAutos()
        llenarSelect()
    })
}

function mostrarAutos(){
    autos.forEach(auto=>{
        const {marca,modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement("p")
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        resultado.appendChild(autoHTML)
    })
}

