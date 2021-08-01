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



