# Curso de React 2016

## Conceptos
> props = datos que le pasamos al componente para inicializarlo.

> Virtual DOM = Es una representacion de todos los objetos de la UI usando un objeto de JS

> Separación de responsabilidades = Dividir la aplicacion en partes con base en lo que tiene que hacer.

### Componentes
* Hacer el bind de una función en el constructor para evitar posibles problemas de memoria.
* PureComponent implementa un metodo para validar si los props y si el estado han cambiado y solo hace el render si cambian 
* PureComponent solo es recomendable usarlo en el componente final del arbol
> El dividir los componentes con estados y componentes solo de UI, nos permite facilitar el volver a usar componentes en partes de la aplicación.

#### Cliclo de vida
**Montado:**
* Constructor() → definir estado
* conponentWillMount() → Aún no esta el DOM, no se deben hacer peticiones sincronas
* render() → dibujamos el dom
* componentDidMount → Después que la aplicación se monta

**Actualización:**
* componentWillReceiveProps(nextProps)
* shouldComponentUpdate(nextProps, nextState) → prueba si es necesario actualizar el componente
* componentWillUpdate(nextProps, nextState) → el componente sera montado
* render() → Renderiza la aplicación
* componenteDidUpdate(prevProps, prevstate) → podemos volver a asignar algo

**Desmontado:**
* componentWillUnmount() → Limpiar eventos o eliminar algunas cosas

### Estructura de archivos

* **File-Type First (FTF)**, donde colocamos todos los archivos de un mismo tipo en una carpeta.
* **Feature First (Pods)***, donde colocamos cada feature en una carpeta.
* **Apps of Apps**, creamos una carpeta por cada aplicación



## Notas
* Todos los componentes de React deben comenzar con mayúscula
* Todos los componentes html son en minuscula
* Los componentes tienen un método para saber su estado (si tienen o no que actualizarse)
* El algoritmo de React permite que se hagan cambios en el DOM de manera efectiva.
* getChildContext() permite setear valores para que esten en el contexto de la aplicación y accesible para cualquier modulo