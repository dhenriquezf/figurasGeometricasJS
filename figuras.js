const perimetroCuadrado = (ladoCuadrado) => {
    const perimetroCuadrado = ladoCuadrado * 4;
    //console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);
    return perimetroCuadrado
}

const perimetroTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => {
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    //console.log(`El perimetro del triángulo es: ${perimetroTriangulo} cm`);
    return perimetroTriangulo
}

const perimetroCirculo = (diametroCirculo) => {
    const PI = Math.PI;
    const perimetroCirculo = diametroCirculo * PI;
    // console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);
    return perimetroCirculo
}

const areaCuadrado = (ladoCuadrado) => {
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
    return areaCuadrado
}

const areaTriangulo = (baseTriangulo, alturaTriangulo) => {
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    // console.log(`El área del triágulo es: ${areaTriangulo} cm^2`)
    return areaTriangulo
}

const areaCirculo = (radioCirculo) => {
    const PI = Math.PI;
    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    // console.log(`El área del circulo es: ${areaCirculo} cm^2`);
    return areaCirculo
}


console.group("Cuadrado")
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`)

perimetroCuadrado(ladoCuadrado)
areaCuadrado(ladoCuadrado)

console.groupEnd()

console.group("Triangulo")

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y base ${baseTriangulo} cm`)
console.log(`La altura del triángulo es:  ${alturaTriangulo} cm`)

perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
areaTriangulo(baseTriangulo, alturaTriangulo)
console.groupEnd()

console.group("Circulo")
const radioCirculo = 4
const diametroCirculo = radioCirculo * 2

console.log(`El radio del circulo es: ${radioCirculo} cm`)
console.log(`El diametro del circulo es:  ${diametroCirculo} cm`)

perimetroCirculo(diametroCirculo)
areaCirculo(radioCirculo)

console.groupEnd()


const calcularPerimetroCuadrado = () => {
    const input = document.getElementById('inputCuadrado')
    const value = input.value

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById('inputCuadrado')
    const value = input.value

    const area = areaCuadrado(value);
    alert(area)
}

const calcularPerimetroTriangulo = () => {
    const inputLado1 = document.getElementById('inputLado1')
    const inputLado2 = document.getElementById('inputLado2')
    const inputBase = document.getElementById('inputBase')
    const valueLado1 = inputLado1.value
    const valueLado2 = inputLado2.value
    const valueBase = inputBase.value

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro)
}

const calcularAreaTriangulo = () => {
    const inputLado1 = document.getElementById('inputLado1')
    const inputLado2 = document.getElementById('inputLado2')
    const inputBase = document.getElementById('inputBase')
    const valueLado1 = inputLado1.value
    const valueLado2 = inputLado2.value
    const valueBase = inputBase.value

    const altura = alturaTriangulo(valueLado1, valueLado2, baseTriangulo)

    const area = areaTriangulo(valueBase,altura);
    alert(area)
}

const calcularPerimetroCirculo = () => {
    const input = document.getElementById('inputRadio')
    const value = input.value * 2

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

const calcularAreaCirculo = () => {
    const input = document.getElementById('inputRadio')
    const value = input.value

    const area = areaCuadrado(value);
    alert(area)
}

const alturaTrianguloIsoceles = (lado1, base) => {

    if(valueLado1 != valueLado2){
        console.log('Los lados a y b no son iguales')
    }else{
        return Math.sqrt(lado1**2 - base**2/ 4)
    }
}