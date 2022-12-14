# Python-FullStack-TP-FrontEnd
TPO Desarrollo Web HTML, CSS y Javascript.

## Resumen
Se desarrollaron 3 páginas web, de acuerdo a lo solicitado en las consignas del archivo PDF "TPO Desarrollo Web HTML, CSS y Javascript".

Las mismas están orientadas a las criptomonedas: la página principal (index.html) contiene información general de las mismas, y posee un menú principal por el cual se puede acceder a las restantes 2 páginas web, una de ellas contiene información de la criptomoneda "bitcoin" y la restante de la criptomoneda "ethereum".

## Consideraciones iniciales
Las páginas web están programadas en lenguaje html y css, y poseen código de javascript (ver más adelante el detalle de programación de cada página web).

## Desarrolladores del Proyecto
El código del proyecto y el informe de funcionalidad y diseño, fue realizado por:
- **Erasmo, Guillermo Nicolás** - DNI: 23.250.179 - Página web principal (index.html)

- **Regali, Gabriel Alfredo** - DNI: 26.840.858 - Página web bitcoin (bitcoin.html)

- **Rey, Matías Agustín** - DNI: 44.158.436 - Página web ethereum (ethereum.html)

## Repositorio de Github

En el repositorio de github se encuentran los siguientes archivos (https://github.com/gabrielregali/Python-FullStack-TP-FrontEnd):

- README.md:Informe de funcionalidad y diseño del proyecto (3 páginas web).

- index.html: Página Web Principal (main).

- styles.css: Código en css correspondiente a index.html.

- script.js: Código en javascript correspondiente a index.html.

- bitcoin.html: Página Web de Bitcoin.

- Carpeta css_bitcoin: Contiene los archivos bitcoin_styles.css con el código en css correspondiente a bitcoin.html y animate.css con el código de la animación de los links de bitcoin.html.

- Carpeta img: Contiene la imagen Bitcoin.jpg correspondiente a bitcoin.html.

- ethereum.html: Página Web de Ethereum.

- Carpeta css_ethereum: Contiene el archivo ethereum_styles.css con el código en css correspondiente a ethereum.html

- scripteth.js: Código en javascript correspondiente a ethereum.html.


## Descripción del código de las páginas web.

### - Página web principal (index.html, styles.css, script.js) desarrollada por Erasmo, Guillermo Nicolás.
#### Header
- Se hizo un header para celulares, tabletas y pc, se usaron imágenes externas.
- Además se incluyó una animacion para que el tamaño cambie constantemente y produzca una efecto visual llamativo.
- Se creó un **menú donde se encuentran los links a las paginas Bitcoin (bitcoin.html) y Ethereum (ethereum.html).**
- Se utilizaron también diferentes fuentes.
 
#### Main
- Se trabajó con 3 secciones utilizando Flex , se le pego a API externa coingecko para tomar precio de Bitcoin en pesos y dolares.
- Se incluyeron iconos (ejemplo instagram), se trabajo con tablas, con listados y formularios que también se cargan en repositorios externos.
- También se incrusta frames con cotizaciones en tiempo real de coin360, tambien se ponen frames de google con mapa de ubicacion de la empresa.

- En el archivo styles.css se da total formato flex a la pagina, se la hace compatible con distintos formatos, se incluye formatos rem, 
también se usan ID y clases.

#### Footer
- En el footer se trabaja con rem en los tamaños y también se referencia al archivo script.js donde se pone cartel de bienvenida a la página.


<br />
<hr />

### - Pagina web bitcoin (bitcoin.html, bitcoin_styles.css, script_bitcoin.js) desarrollada por Regali, Gabriel Alfredo.
#### Responsive 
La pagina web bitcoin.html es **responsive**, por lo cual tiene una correcta visualización en dispositivos celulares, tablets y PCs.
Para poder realizar esto, se programó el código css con 3 puntos de corte:
- Celulares: max-width 640px
- Tablets: max-width: 1024px and min-width:640px
- PCs: min-width:1024px

#### Header

- Se obtuvo el icono de bitcoin de la página https://fontawesome.com/ . 
- Se utilizó un estilo de fuente sans-serif, con diferentes tamaños para las diferentes partes del header (usando diferentes valores de **rem**, al igual que en toda la página web).
- Se utilizó **flex-box** para todas las partes del menú: ul, li, a.
- Para las etiquetas "a", se utilizó un estilo de fuente Poppins (se obtuvo de la página web de Google Fonts). Tienen una **animación hover**, cuando se pasa el mouse por encima cambian el color de negro a naranja.
- Se linkeo cada etiqueta "a" a la sección correspondiente de la pagina web, cuando se presionan en el menú se direcciona a las mismas.

#### Main
##### Sección ¿Que es Bitcoin?
- La parte superior utiliza un icono de la página https://fontawesome.com/ y un estilo de fuente sans-serif.
- Se utilizó **grid** en el contenido de esta sección:
  - En la caja de la izquierda (**grid item**) se encuentra un texto de descripción y una **imagen externa** (Bitcoin.jpg).
  - En la caja de la derecha (**grid item**) se encuentra un **video de youtube**.


##### Sección Historial Precios
- La parte superior utiliza un icono de la página https://fontawesome.com/ y un estilo de fuente sans-serif.
- Se utilizó **grid area** en el contenido de esta sección:
  - Para visualización en PCs el contenido se encuentra distribuido en 3 cajas: 1 caja del lado izquierdo y dos cajas del lado derecho. Para tablets y celulares estas 3 cajas se apilan una debajo de la otra.
  - En la primera caja se creó una Tabla con 3 columnas, un encabezado y 14 filas.
  - En la segunda caja se linkeo un *widget* que muestra la cotización historial gráfica de bitcoin comparada con las otras criptomonedas.
  - En la tercera caja se encuentra una sección de link útiles. Se puede acceder a estos links abriendo una nueva pestaña (utilizando *target="_blank"* en las etiquetas "a").        
  El título "Links útiles" tiene una **animación** por la cual las letras entran en pantalla desde la derecha hacia la izquierda (animated flash bounceInRight delay-3s).
  Los links de las páginas web poseen una **animación** por la cual las letras aparecen (anim animated bounceInRight delay-4s). Estas etiquetas "a" poseen la animación hover. 
  Todas estas animaciones se toman del archivo animate.css .
  
##### Sección Bitcoin hoy
- La parte superior utiliza un icono de la página https://fontawesome.com/ y un estilo de fuente sans-serif.
- Se utilizó **grid** en el contenido de esta sección:
  - En la caja de la izquierda (**grid item**) se encuentra un texto de descripción y una sección con dos **div** los cuales muestran la cotización actual del bitcoin en dólares estadounidenses y en pesos argentinos.
  - En la caja de la derecha (**grid item**) se linkeo un *widget* que muestra un mapa de árbol de criptomonedas actualizado
- **Código javascript**: la caja de la izquierda posee dos **div** que muestran la cotización actual del bitcoin en dólares estadounidenses y en pesos argentinos.
  - Esto se realiza mediante código en javascript (script_bitcoin.js), el cual realiza solicitudes de cotización del bitcoin en pesos argentinos y en dólares al API de la página web: https://www.coingecko.com/es/api/documentation .
  - Lo hace utilizando la sentencia fetch, a los 2 endpoint que indica la página web del API. Este código realiza una solicitud inicial, y luego realiza solicitudes cada 2 minutos (el API se actualiza aproximadamente cada 5 minutos), de manera que los valores se actualizan sin necesidad de actualizar o refrescar la página.
  
##### Sección Noticias
- La parte superior utiliza un icono de la página https://fontawesome.com/ y un estilo de fuente sans-serif.
-  Posee un *widget* el cual muestra noticias actualizadas de criptomonedas.
 
##### Sección Encuesta
- La parte superior utiliza un icono de la página https://fontawesome.com/ y un estilo de fuente sans-serif.
- Esta sección posee un **formulario**, el cual envía los datos completados a la página web https://formspree.io/, mediante el método "post".
- El bóton "Enviar" envía los datos a *formspree* mediante *submit* y el botón *reset* "limpia* el formulario.
- Cada campo del formulario indica el dato que debe completarse mediante *placeholder*.
- **Código javascript**: El campo *Email* posee una **validación de correo electrónico válido**. Esto se realiza mediante un código escrito en javascript (script_bitcoin.js), el cual verifica que en el campo Email el usuario haya ingresado los caracteres "@" o ".com". 
En el caso que no se hayan ingresado estos caracteres, aparece una ventana emergente indicando que no se ingresó un correo válido, y el usuario deberá confirmar para poder continuar.

#### Footer
- Se obtuvo el icono de bitcoin de la página https://fontawesome.com/ y un estilo de fuente sans-serif.
- Se utilizó **flex-box** para ubicar el icono y texto de bitcoin, y el autor de la página web.

<br />
<hr />

### - Pagina web ethereum (ethereum.html, ethereum_styles.css, scripteth.js) desarrollada por Rey, Matías Agustín.
#### Header
- Se utilizaron botones referenciados para redirigirse hacia las partes de la página, agregando un botón referencial que me lleva a Binance, mediante un link.

#### Main
- Contamos con una tabla, formulario y varios textos ordenados con grid area, colocándole estilos personalizados a las diferentes partes del html. 
- Se agregaron iconos, y movimientos tanto en los H1 como en los iconos previamente mencionados. 
- También contamos con un iframe que nos lleva hacia un video contando las problemáticas de ethereum. 

#### Footer
- Tiene diferentes iconos de redes sociales los cuales posteriormente tendrán links para redirigirse.
