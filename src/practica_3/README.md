# Unidad 2.2 - Listas dinámicas y renderizado condicional - Práctica


### Tarea 1

* Crear un `input=text` y un `button`. Agregar un `handler` al `button` que al presionar agregué a un `array`  el valor ingresado en el `input`. Si el campo está vacío no se debería agregar al arreglo. Tras agregar el valor del campo, el mismo debería limpiarse. El `array` debe manejarse como un `state`.

* Renderizar cada item del array en pantalla. Si el valor ingresado "parsea" cómo númerico mostrar el valor e indicar como texto si es "par" o "impar" el valor ingresado (redondearlo en caso de ser flotante). Si el valor ingresado es un texto mostrarlo dentro de una caja de texto (`input=text`).

* Bonus: Generar cada uno de los elementos anteriores como un componente separado en un archivo separado.


### Tarea 2: 

* Para cada uno de los items del `array` anterior renderizar dentro de cada fila del listado renderizar un `button` etiquetado como "borrar" de manera que al presionar dicho botón se elimine el elemento del arreglo.

* Agregar un `button` junto al campo de texto que se está renderizando cuando el valor es un texto en el listado y etiquetarlo como "editar". Al presionarlo debe cambiar el valor del elemento de esa línea en el `array` 
