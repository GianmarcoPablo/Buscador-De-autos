//varoabñes
const resultado = document.querySelector("#resultado")
const year = document.querySelector("#year")

const max = new Date().getFullYear()
const min = max - 10


//eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos() //muestra lo automoviles al cargar

    //lena las opcioens de años
    llenarSelect()
});

//funciones
function mostrarAutos(){
    autos.forEach(auto=>{
        const {marca, modelo,year,puertas,tranmision,precio,color} = auto
        const autoHTML = document.createElement("p")
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Tranmisión: ${tranmision} - ${precio} - Color: ${color}
        `

        resultado.appendChild(autoHTML)
    })
}

//genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement("option")
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}