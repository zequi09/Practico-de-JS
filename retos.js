const PI = Math.PI

// Datos para el cuadrado

const input_cuadrado = document.querySelector("#Input_Cuadrado")
const Resultado_Cuadrado_Area = document.querySelector("#Resultado_area_cuadrado")
const Resultado_Cuadrado_Perimetro = document.querySelector("#Resultado_perimetro_cuadrado")

// Datos para el triángulo

const input_triangulo = document.querySelector("#Input_Triangulo")
const input_triangulo_base = document.querySelector("#Input_Base_Triangulo")
const Resultado_Triangulo_Area = document.querySelector("#Resultado_area_triangulo")
const Resultado_Triangulo_Perimetro = document.querySelector("#Resultado_perimetro_triangulo")

//Datos para el círculo

const input_circulo = document.querySelector("#Input_Circulo")
const Resultado_Circulo_Area = document.querySelector("#Resultado_area_circulo")
const Resultado_Circulo_Perimetro = document.querySelector("#Resultado_perimetro_circulo") 

//Datos para el precio y descuento
const input_precio = document.querySelector("#Input_Precio")
const input_descuento = document.querySelector("#Input_Descuento")
const Resultado_Precio_Descuento = document.querySelector("#Resultado_Precio_descuento")



const perimetroCuadrado = lado => lado *4
const areaCuadrado = lado => lado*lado

function calcularPerimetroCuadrado() {
    let value = input_cuadrado.value
    let resultado = perimetroCuadrado(value)
    Resultado_Cuadrado_Perimetro.innerHTML = `Perímetro : ${resultado}cm`
}

function calcularAreaCuadrado() {
    let value = input_cuadrado.value
    let resultado = areaCuadrado(value)
    Resultado_Cuadrado_Area.innerHTML = `Área : ${resultado}cm^2`
}

const perimetroTriangulo = (lado1,base) => lado1+lado1+base


function calcularPerimetroTriangulo() { 
    let valueT = Number(input_triangulo.value)
    let value_base = Number(input_triangulo_base.value)
    let resultado = perimetroTriangulo(valueT, value_base)
    Resultado_Triangulo_Perimetro.innerHTML = `Perímetro: ${resultado}cm`
} 


const areaTriangulo = (lado1,base) => (base*(Math.sqrt(lado1**2-base**2)))/2 

function calcularAreaTriangulo() {
    let valueT = Number(input_triangulo.value)
    let value_base = Number(input_triangulo_base.value)
    let resultado = areaTriangulo(valueT, value_base)
    Resultado_Triangulo_Area.innerHTML = `Área: ${resultado}cm^2`
}

const perimetrocirculo = (radio) => 2*PI*radio

function calcularPerimetroCirculo() { 
    let valueC = input_circulo.value
    let resultado = perimetrocirculo(valueC)
    Resultado_Circulo_Perimetro.innerHTML = `Perímetro ${resultado}cm`
} 

const areacirculo = (radio) => PI*radio**2

function calcularAreaCirculo() {
   let valueC = input_circulo.value
   let resultado = areacirculo(valueC)
   Resultado_Circulo_Area.innerHTML = `Área ${resultado}cm^2`
} 

const preciodescuento = (precio,descuento) => (precio*(100-descuento))/100

function calcularPrecio() {
    let valueP = input_precio.value
    let valueD = input_descuento.value
    let resultado = preciodescuento(valueP,valueD)
    Resultado_Precio_Descuento.innerHTML = `El precio con descuento es: ${resultado}$`}



function calcularmedia(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, elemento) {
            return valorAcumulado + elemento
        }
    )
    const promediolista = sumalista / lista.length
    return promediolista
}

let lista1 = [
    100,500,800,1000,5,310
]

lista1.sort(function (a,b) {    
    return a-b
})



const mitadlista1 = parseInt(lista1.length /2)

function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    }else {
        return false
    }
}

let mediana

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadlista1 -1 ] 
    const elemento2 = lista1[mitadlista1]

    const promedio1y2 = calcularmedia([elemento1,elemento2])

    mediana = promedio1y2
}else {
    mediana =lista1[mitadlista1]
}

let lista2 = [
    1,1,2,3,3,3,3,3,2,2,2,2,1,1,1,1,1,1,1,1
]

const lista2Count = {}

lista2.map(
    function (elemento) {
        if (lista2Count[elemento]) {
            lista2Count[elemento] +=1
        } else{
            lista2Count[elemento] = 1
        } 
    }
)

const lista2Array = Object.entries(lista2Count).sort(
    function (a,b) {        
        return a[1]-b[1] 
    }
)

const moda = lista2Array[lista2Array.length - 1]


    




