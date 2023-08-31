/* Explicación para recordar:
- export function: Define una función que será exportada y podrá ser utilizada en otros archivos.
- RemoveFromCartIcon: Nombre de la función que actúa como un componente en React.
- return (: El comienzo del contenido JSX que será retornado por la función.
- <svg ...>: Aquí se define un elemento SVG que representa un icono.
    xmlns: Define el espacio de nombres XML del documento.
    width y height: Establecen las dimensiones del SVG en píxeles.
    viewBox: Define la vista en el sistema de coordenadas del SVG.
    strokeWidth, stroke, fill, strokeLinecap, strokeLinejoin: Propiedades que afectan el estilo del trazo y el relleno del SVG.
- <path ...>: Aquí se definen los trazos (caminos) del icono utilizando el elemento <path>. 
    Cada <path> representa una parte del icono.
    - stroke y d: Establecen el color del trazo y el atributo d define el comando de ruta para dibujar la forma.
    - fill: Establece el color de relleno del trazo.
    - stroke-linecap: Establece la forma de los extremos de la línea.
*/


export function AddToCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l6 .429m7.138 6.573l-.143 1h-13' />
        <path d='M15 6h6m-3 -3v6' />
      </svg>
    )
  }
  
  export function RemoveFromCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l8 .571m5.43 4.43l-.429 3h-13' />
        <path d='M17 3l4 4' />
        <path d='M21 3l-4 4' />
      </svg>
    )
  }
  
  export function ClearCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17a2 2 0 1 0 2 2' />
        <path d='M17 17h-11v-11' />
        <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
        <path d='M3 3l18 18' />
      </svg>
    )
  }
  
  export function CartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l14 1l-1 7h-13' />
      </svg>
    )
  }
  