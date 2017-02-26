# Curso de React 2016

## Conceptos
> props = datos que le pasamos al componente para inicializarlo.

> Virtual DOM = Es una representacion de todos los objetos de la UI usando un objeto de JS

> Separación de responsabilidades = Dividir la aplicacion en partes cin base en lo que tiene que hacer.

### Componentes
* Hacer el bind de una función en el constructor para evitar posibles problemas de memoria.
* PureComponent implementa un metodo para validar si los props y si el estado han cambiado y solo hace el render si cambian 
* PureComponent solo es recomendable usarlo en el componente final del arbol



## Notas
* Todos los componentes de React deben comenzar con mayúscula
* Todos los componentes html son en minuscula
* Los componentes tienen un método para saber su estado (si tienen o no que actualizarse)
* El algoritmo de React permite que se hagan cambios en el DOM de manera efectiva.