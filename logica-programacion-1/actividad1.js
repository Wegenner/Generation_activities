alert("Se bienvenido al programa de acomodo de numeros, ingresa 1 numero a la vez hasta llegar a 3: ")

let num1 = prompt("Dame el valor 1",0)
let num2 = prompt("Dame el valor 2",0)
let num3 = prompt("Dame el valor 3",0)

let arreglo = [num1, num2, num3]

arreglo = arreglo.sort()

alert("Los valores en orden son: " + arreglo)