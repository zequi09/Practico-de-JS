/* let Nombre =  'Ezequiel Mantilla Restrepo'
let Ahorros = 900000
let Deudas = 100000
let Dinero = Ahorros-Deudas

console.log(Nombre)
console.log(Dinero)

prueba =(name,lastname, nickname) =>{
    let FullName = `${name} ${lastname}`
    return `Mi nombre es ${FullName} y mi Nickname es ${nickname}`
}

console.log(prueba('Ezequiel','Mantilla Restrepo','Zequi'))

//CONDICIONALES

function tipoDeSuscripcion(s){
    if(s == 'Free'){
        return console.log("Solo puedes tomar los cursos gratis")
    }else if(s == 'Basic'){
        return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    }else if(s == 'Expert'){
        return console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
    }else if(s == 'Expert+'){
        return console.log("Puedes tomar TODOS los cursos de Platzi durante un mes")
    }
}

tipoDeSuscripcion('Expert+')

function tipoDeSuscripcion(s){
    if(s == 'Free'){
        return console.log("Solo puedes tomar los cursos gratis")} 
    if(s == 'Basic'){
        return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")} 

    if(s == 'Expert'){
        return console.log("Puedes tomar casi todos los cursos de Platzi durante un año")} 

    if(s == 'Expert+'){
        return console.log("Puedes tomar TODOS los cursos de Platzi durante un mes")
    }
}

tipoDeSuscripcion('Expert')

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
i = 0
while ( i < 5){
    i ++
    console.log("El valor de i es: " + i); 
}

let resultado
function game() {
    do {
        resultado = parseInt(prompt('¿Cual es el resultado de 2+2? : '))
    } while( resultado !== 4)
    if (resultado === 4)
    return console.log('Eres un crack')
}

game() */

fruticas = ['Fresa', 'Mango', 'Banano']

function imp1() {
     return console.log(fruticas)
}

 imp1()

 function imp2(array) {
     array.forEach((elementos) => {
         console.log(elementos)
     } )
 }

 imp2(fruticas)

