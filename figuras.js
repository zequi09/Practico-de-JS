//Código cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log("El perímetro del cuadrado: "+ ladoCuadrado +"cm")

const perimetroCuadrado = ladoCuadrado * 4

console.log("El perimetro del cuadrado es: "+ perimetroCuadrado +"cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log("El área del cuadrado es: "+ areaCuadrado +"cm^2")

console.groupEnd()


//Código triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4

console.log("Los lados del triángilo miden: "+ ladoTriangulo1 +"cm, "+ ladoTriangulo2 +"cm, "+ baseTriangulo +"cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo

console.log("El perímetro del triangulo es: "+ perimetroTriangulo +"cm")

const alturaTriangulo = Math.sqrt((ladoTriangulo1 * ladoTriangulo1) - (baseTriangulo/2)*(baseTriangulo/2))

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2 

console.log("El área del triángulo es: "+ areaTriangulo +"cm^2")
console.log(alturaTriangulo)
console.groupEnd()

//Circulo

console.group("Circulos")

const radioCirculo = 4
const diametroCirculo = radioCirculo *2
const PI = Math.PI
const perimetroCirculo = PI * diametroCirculo
const areaCirculo = PI*(radioCirculo*radioCirculo)

console.log("El radio de círculo es: "+radioCirculo +"cm")
console.log("El diametro del círculo es: "+diametroCirculo +"cm")
console.log("El perímetro del círculo es: "+perimetroCirculo +"cm")
console.log("El área de círculo es: "+areaCirculo +"cm^2")

console.groupEnd()

