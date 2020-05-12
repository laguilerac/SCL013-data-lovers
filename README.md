# README "PokeMundo"

## Introducción

Pokémon Go es un juego de realidad aumentada para smartphones ambientado en el universo de Pokémon. Con aproximadamente 60 millones de usuarios activos la plataforma del juego cada vez se ha adaptado más a las necesidades de sus usuarios, aún así existe información que a muchos de ellos les gustaría tener de ante mano para planificar de mejor manera sus incursiones dependiendo del nivel en el que se encuentran, así nace "PokeMundo".

"PokeMundo" es nuestro proyecto de Data Lovers para Laboratoria. El sitio esta enfocado en jugadores de distinto nivel de complejidad y nace de la necesidad de información de estos para un desarrollo más eficiente de sus técnicas de juego. Nuestro objetivo es que a través de simples e intuitivos comandos los usuarios puedan encontrar la información necesaria para complementar su conocimiento del juego y que puedan acceder a ella tanto desde su computador como desde su celular. 

Para lograr abarcar distintos usuarios con diferentes necesidades hemos dividido nuestro trabajo en cuatro historias de usuario:

**Historia 1:** Como jugador novato quiero conocer los distintos pokémon y poder ordenarlos de forma numérica y alfabética para poder decidir cuales usar al comienzo del juego.
Criterio de Aceptación: Jugador novato ingresa a la página y escoge entre filtros para escoger numérico o alfabético y así obtener la información.

**Historia 2:** Como jugador novato quiero conocer los distintos tipos de pokémon para poder comenzar a generar una estrategia de juego.
Criterio de Aceptación: Jugador novato ingresa a la página y escoge el filtro del tipo de pokémon que desea para así poder obtener la información.

**Historia 3:** Como jugador intermedio quiero poder conocer las debilidades de los pokémon para poder ganar más batallas y así subir de nivel. 
Criterio de Aceptación: Jugador intermedio ingresa a la página y escoge filtro de debilidad para así poder obtener información.

**Historia 4:** Como jugador experimentado quiero poder acceder rápidamente al pokémon de mi interés y a su información para poder planear mejor mis estrategias.
Criterio de Aceptación: Jugador experimentado utiliza la barra de búsqueda para encontrar rápidamente un pokémon especifico y hace click sobre la tarjeta para poder desplegar otra con más información. 

Nuestras historias de usuario cumplen con definición de terminado de forma independiente, cuando: Estructura de html se encuentre completa, los estilos de css hayan sido añadidos y la página se encuentre responsive, DOM haga el llamado de mi función, JS recorra la data, testeos de UX sean realizados a posibles usuarios, test unitarios se encuentren listos, se realice deploy y readme. 

## Cómo utilizar la plataforma

-   Ingresar a la página de PokeMundo.
-   Presionar el botón para poder entrar en la plataforma.
-   Según necesidad seleccionar uno de los distintos filtros que ofrece la página (orden numérico, alfabético, por tipo, por debilidad, por botón de búsqueda).
-   Si se quiere obtener mayor información sobre el pokémon se puede hacer click sobre la tarjeta de este para poder desplegar en una nueva tarjeta mayor cantidad de datos. 

## Proceso y decisiones de diseño

Una vez conocido el proyecto y leído la investigación con jugadores de Pokemon Go otorgada en las bases realizamos un primer sketch a papel y lápiz para definir lo que nos parecía prioritario mostrar según las necesidades de esos usuarios. Pensamos en una pantalla con filtros que le permitiera al usuario buscar pokémon según su necesidad y pensamos en una tarjeta mayor que mostrará toda la información de un pokémon determinado al momento de dar click y así no saturar la pantalla con información de una sola vez.
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Sketch%201.jpeg)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Sketch%202.JPG)

Este sketch fue presentado a nuestras compañeras de squad, quienes nos indicaron que podríamos reducir o acomodar de otra manera la cantidad de filtros, buscando una visualización más prioritaria. A la vez comenzamos con el testeo de usabilidad, donde entrevistamos a cinco personas (un niño, un adolescente y tres adultos) para confirmar nuestros filtros, armar nuestras historias de usuario, y preguntar por apreciaciones de nuestro sketch. Gracias a esto concluimos la importancia en especial del filtro de debilidad y de búsqueda y además planteamos la necesidad de una barra de navegación para nuestra página. Estas conclusiones las reflejamos en nuestro prototipo de baja fidelidad realizado en InVision.
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Baja%20Fidelidad%201.jpg)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Baja%20Fidelidad%202.jpg)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Baja%20Fidelidad%203.jpg)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Baja%20Fidelidad%204.jpg)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Baja%20Fidelidad%205.jpg)

Posterior a esta etapa procedimos a crear nuestro prototipo de alta fidelidad en Figma, donde decidimos inclinarnos por una paleta de colores en tonos verdes gradientes para respetar la identidad gráfica de Pokemon Go y de esa forma que nuestra página se pueda asociar más rápidamente con lo que se esta ofreciendo. Además decidimos seguir una interfaz simple y limpia para no producir saturación visual y respetar los fundamentos del visual design. En este punto realizamos un logo que no se condecía con nuestro diseño principal. Luego de recibir el feedback de nuestras coaches y compañeras realizamos un cambio que se alineaba más con el concepto que estábamos intentando transmitir.
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Logo%201.png)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Logo.png)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Figma%201.JPG)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Figma%202.JPG)
[Link a prototipo aquí](https://www.figma.com/proto/Yiequf0k9S97J9a10RqhFU/Data-Lovers?node-id=4:0&scaling=min-zoom)
 
## Test de usabilidad

Una vez el prototipo en Figma terminado comenzamos a realizar a través de maze nuestros test de usabilidad ([aquí](https://t.maze.design/10793867)) con el cual pudimos concluir algunas fallas en nuestro planteamiento de preguntas y verificar la efectividad de nuestro proyecto. 
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Maze.JPG)
 
 Además realizamos un último testeo con nuestra sitio ya casi terminado (5 mujeres, entre 25 y 30 años) en el cuál pudimos solucionar nuestros problemas de usabilidad y destacaron lo amigable y simple del proyecto. Finalmente realizamos el último cambio con respecto a la imagen del sitio en su inicio para que este se viera más atractivo sin saturarlo
 ![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Pag%201.JPG)
 ![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-data-lovers/master/src/img/Pag2.JPG)
 

## Status del proyecto
Nuestro sitio se encuentra casi completo al 100%. De tener la oportunidad de realizar iteraciones trabajaríamos en que todo este se vea reflejado en español.