# Unidad 2 - Manejo de estados - Práctica


## Pre-requisitos

Considerando el JSX brindado en `Practica4.js` 


### Tarea 1
- Crear un state para el valor del `input1` definirle un valor inicial random (1 o 0).
- Permitir que el usuario pueda cambiarle el valor a `input1` definiendo 1 o 0. Si el usuario cargase otra cosa setear el valor 0.


### Tarea 2
- Capturar el valor del `checkbox` en un estado de React si el input está seleccionado guardar 1 sino guardar 0.
- Completar los valores posibles del `select` para elegir algunas de las compuertas lógicas (or, and, nand, nor y xor). Ver: https://en.wikipedia.org/wiki/Logic_gate


### Tarea 3
- Capturar el evento de cambio del contenido del `select` y mostrar el resultado de aplicar la puerta lógica seleccionada al valor del estado de `input1` y el de `checkbox` de  en el espacio reservado para tar fin
- Bonus: Refactorizar la selección y el cálculo de la compuerta lógica como un componente.


### Tarea 4
- Refactorizar la selección y el cálculo de la compuerta lógica como un componente llamado `LogicGates`
- Refactorizar `input1` y `checkbox` como componentes apartes, capturar su cambio de valor y pasarselo al componente `LogicGates` para su cálculo.

### Tarea 5
- Cambiar lo necesario en `LogicGates` para que al calcularse un nuevo valor de compuerta pueda ser usado por un componente que lo esté invocando.
- Agregar dos nuevos inputs en App.js (type `range` y `radio`) para capturar dos entradas más 0 o 1.
- Utilizar `LogicGates` para aplicar una compuerta lógica a estas 2 nuevas entradas
- Utilizar `LogicGates` para aplicar una compuerta lógica a las 2 `LogicGates` previamente calculadas.
- Bonus: Utilizar CSS y HTML adicional para que el formulario quede lo más claro posible en términos de visualización.