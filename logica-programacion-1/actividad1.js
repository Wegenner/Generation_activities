alert("Se bienvenido al programa de acomodo de numeros, ingresa 1 numero a la vez hasta llegar a 3: ")

let num1 = prompt("Dame el valor 1",0)
let num2 = prompt("Dame el valor 2",0)
let num3 = prompt("Dame el valor 3",0)

let arreglo = [num1, num2, num3]

arreglo = arreglo.sort()

if(num1 == num2 && num2 == num3){
    alert("Los numeros con iguales: " + num1 )
}else{
    alert("Los valores en orden mayor a menor son: " + arreglo)
    alert("Los valores en orden menor a mayor son: " + arreglo.reverse())
}
