const salariosCol = colombia.map(
    function (persona) {
        return persona.salario
    }
)

const salarosColSorted = salariosCol.sort(
    function (a,b) {
        a-b
    }
)


function esPar(numero) {
    return (numero % 2 === 0) 
}

function calcularmedia(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, elemento) {
            return valorAcumulado + elemento
        }
    )
    const promediolista = sumalista / lista.length
    return promediolista
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad -1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularmedia([personaMitad1, personaMitad2])
        return mediana
    }else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

console.log(medianaSalarios(salarosColSorted))