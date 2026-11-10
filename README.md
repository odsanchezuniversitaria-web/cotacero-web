# CotaCero — pruebas web

Acceso directo, sin contraseña: https://odsanchezuniversitaria-web.github.io/cotacero-web/

Unity 0.1.24 · revisión del 10 de noviembre de 2026 · build `d243332fe54702c6`.

La nivelación del SOUTH N6 dispone de un mini panel «Burbuja · vista ampliada» en PC y celular. Sigue en tiempo real los tres tornillos y usa la misma tolerancia que el nivel circular del instrumento: ámbar fuera del centro y verde «Centrada · OK» al nivelar. En vertical tiene una franja propia sobre el equipo; en horizontal ocupa la columna lateral. Se oculta en otras pestañas y al mirar por el ocular. VR conserva su presentación física.

Esta incorporación se comprobó en Unity GameView a 1366×768, 390×844, 320×568 y 844×390. Se verificaron el arrastre de la perilla con punteros de ratón y toque, la coincidencia entre desviación gráfica e inclinación física, la confirmación verde, el cambio de resolución y la ausencia de superficies que bloqueen los gestos. También se comprobó en Edge con ratón a 1366×768 y toque Android emulado a 390×844: la perilla A hace avanzar la guía, el mini panel reaparece en montaje y se adapta a 320×568 y 844×390 sin desbordamiento horizontal. Ambos recorridos registraron cero errores de JavaScript. No se probó en un teléfono físico.

El ocular de la SOUTH N6 usa pantalla dividida en PC y celular: el objetivo y la estación se ven al mismo tiempo. En PC/horizontal aparecen lado a lado; en celular vertical, el ocular está arriba y el instrumento abajo. Se arrastran las perillas reales para ajustar el foco y el retículo. «Ver foco» y «Ver retículo» acercan sus piezas; el fondo permite girar la vista. Los frenos y ajustes finos conservan su funcionamiento. La confirmación permite seguir observando hasta pulsar «Salir del ocular».

La guía cancela el arrastre anterior al cambiar de paso, señala la perilla siguiente y retira la marca al confirmar el enfoque. Pistas y avisos ocupan la franja superior. Las patas del trípode del nivel 0 mantienen sus rieles, cierres y puntas orientados hacia fuera al abrirse, alineados con la cabeza.


Validación del 10 de noviembre: el tutorial de controles de 19 pasos se recorrió con ratón en Edge 1366×768 y con eventos táctiles de Android emulado 390×844. Se enfocaron prisma y retículo manipulando sus piezas, se mantuvo la vista abierta tras la confirmación y se salió voluntariamente. Las marcas cambiaron de pieza y desaparecieron al completar el enfoque. Ambos recorridos registraron cero errores de JavaScript. Con el trípode corregido se completó también el nivel 0 (5/5) en PC mediante tres arrastres independientes; en Unity se comprobaron las tres direcciones radiales y la disposición vertical.

El nivel 0 presenta los mismos objetos que aparecen en el terreno: trípode amarillo articulado, nivel óptico, referencia BM-1 y burbuja. La escuela se muestra desde el edificio de la escena. Cada pata se abre de forma independiente y marca OK al completar la apertura. La burbuja física y su vista ampliada siguen los mismos ajustes A/B.

Nivel 0 en PC: arrastra una pata, mantén el botón derecho para girar la vista y usa la rueda para acercar o alejar. En celular: arrastra la pata, desliza el fondo para mirar y pellizca con dos dedos para acercar. El trípode ocupa la zona libre sobre el panel en vertical; la pantalla de nivelación usa el ancho del celular. La barra sigue disponible como ayuda.

La revisión del 9 de noviembre completó el nivel 0 hasta el logro de 5/5 en Edge 1366×768 y Android táctil emulado 390×844. Se verificaron los tres arrastres con ratón, órbita, rueda, arrastre táctil, pellizco, apertura auxiliar, rechazo de una nivelación incorrecta y confirmación de la burbuja centrada. Las pruebas del navegador no registraron errores de JavaScript. La narración de apertura conserva la grabación anterior, que describe la barra de ayuda.
Interfaz tecnológica con fondos azul oscuro, marcos cian, esquinas diagonales y respuesta visual al pulsar. El estilo cubre los menús, guías, misiones y paneles didácticos del laboratorio. Los rellenos opacos evitan letras visibles de otras capas. La Planilla del SOUTH N6 tiene cinco páginas, letra ampliada en celular y lectura desplazable; mientras se consulta, las pistas por inactividad esperan. Las teclas y LCD del SOUTH N6 y las pantallas físicas de las máquinas conservan su aspecto de instrumento.

Nexus puede enlazar esta URL. El enlace es público; esta distribución no implementa autenticación de Nexus.

El inicio se organiza en Estación total y topografía, Concreto y Laboratorio de materiales. Dentro de topografía están los niveles 0–3. En el laboratorio, acércate a un equipo y pulsa IDENTIFICAR para iniciar su tutorial.

En celular, usa orientación vertical para disponer del teclado ampliado. En PC usa ratón y teclado; en la sala, WASD mueve, C cambia la postura y Z acerca la vista. En Quest Browser pulsa «Entrar / salir de VR». Entrar o salir reinicia la actividad actual; WebXR requiere un navegador y visor compatibles.

La revisión incluye menús, disposición de guías, detección de PC/celular, ayudas contextuales, avance inicial y señalización de objetos. La secuencia de estado de concreto también se verificó completa, incluidas respuestas incorrectas y puntuación. La primera descarga sigue siendo grande.

La interfaz nueva se comprobó en PC 1366×768 y Android táctil emulado 390×844. La Planilla también se recorrió en 320×568 y 844×390; en pantalla pequeña se verificó el arrastre para leer el final sin mover los botones. Estos recorridos no generaron errores de JavaScript ni desbordamiento horizontal.

Las comprobaciones de navegador usan Edge de escritorio y emulación táctil de Android. No equivalen a una prueba de memoria/rendimiento en teléfonos físicos ni de manos, agarres y todos los ensayos dentro de un visor. Esta distribución se comparte para pruebas.

GitHub Actions reconstruye los recursos desde payload/manifest.json con verificación SHA-256 y publica site/. No aplicar StatiCrypt ni añadir una pantalla de contraseña en futuras publicaciones.

El repositorio contiene la distribución web compilada, no el proyecto editable de Unity. Las licencias de WebXR Export se incluyen en el sitio.
