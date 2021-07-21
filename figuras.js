//Código cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log("El perímetro del cuadrado: "+ ladoCuadrado +"cm")

function perimetroCuadrado(lado) {
    return lado * 4
} 

console.log(perimetroCuadrado(5))

/* console.log("El perimetro del cuadrado es: "+ perimetroCuadrado +"cm")
 */

function areaCuadrado(lado) {
    return lado*lado
} 
console.log(areaCuadrado(5))

/* console.log("El área del cuadrado es: "+ areaCuadrado +"cm^2")
 */
console.groupEnd()


//Código triangulo
console.group("Triangulos")

/* const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4 */

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base
}

console.log(perimetroTriangulo(6,6,4))

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
 */
/* console.log("El perímetro del triangulo es: "+ perimetroTriangulo +"cm")
 */
 function alturaTriangulo(lado,base) {
     return Math.sqrt((lado*lado)-(base/2)*(base/2))
 }

 console.log(alturaTriangulo(6,4))

/* const alturaTriangulo = Math.sqrt((ladoTriangulo1 * ladoTriangulo1) - (baseTriangulo/2)*(baseTriangulo/2))
 */
function areaTriangulo(base,altura) {
    return (base*altura)/2
} 
console.log(areaTriangulo(4,alturaTriangulo(6,4)))  

/* console.log("El área del triángulo es: "+ areaTriangulo +"cm^2")
console.log(alturaTriangulo) */
console.groupEnd()

//Circulo

console.group("Circulos")

const radioCirculo = 4

function diametroCirculo(radio) {
    return radio*2
} 

const PI = Math.PI

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return PI*diametro
} 

function areaCirculo(radio) {
    return PI*(radio*radio)
} 

console.log("El radio de círculo es: "+radioCirculo +"cm")
console.log(diametroCirculo(radioCirculo))
console.log(perimetroCirculo(8))
console.log(areaCirculo(4))


/* console.log("El perímetro del círculo es: "+perimetroCirculo +"cm")
console.log("El área de círculo es: "+areaCirculo +"cm^2") */

console.groupEnd()


//Interacuar con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    
    const perimetro = perimetroCuadrado(value)
    document.getElementById('resultadoCuadrado').innerHTML = perimetro
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    
    const area = areaCuadrado(value)
    document.getElementById('resultadoCuadrado').innerHTML = area
}

