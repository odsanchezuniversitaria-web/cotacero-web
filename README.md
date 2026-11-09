# CotaCero — pruebas web

Acceso directo, sin contraseña: https://odsanchezuniversitaria-web.github.io/cotacero-web/

Unity 0.1.24 · revisión del 9 de noviembre de 2026 · build `81d7529b9212014b`.

Interfaz tecnológica con fondos azul oscuro, marcos cian, esquinas diagonales y respuesta visual al pulsar. El estilo cubre los menús, guías, misiones y paneles didácticos del laboratorio. Los rellenos opacos evitan letras visibles de otras capas. La Planilla del SOUTH N6 tiene cinco páginas, letra ampliada en celular y lectura desplazable; mientras se consulta, las pistas por inactividad esperan. Las teclas y LCD del SOUTH N6 y las pantallas físicas de las máquinas conservan su aspecto de instrumento.

Nexus puede enlazar esta URL. El enlace es público; esta distribución no implementa autenticación de Nexus.

El inicio se organiza en Estación total y topografía, Concreto y Laboratorio de materiales. Dentro de topografía están los niveles 0–3. En el laboratorio, acércate a un equipo y pulsa IDENTIFICAR para iniciar su tutorial.

En celular, usa orientación vertical para disponer del teclado ampliado. En PC usa ratón y teclado; en la sala, WASD mueve, C cambia la postura y Z acerca la vista. En Quest Browser pulsa «Entrar / salir de VR». Entrar o salir reinicia la actividad actual; WebXR requiere un navegador y visor compatibles.

La revisión incluye menús, disposición de guías, detección de PC/celular, ayudas contextuales, avance inicial y señalización de objetos. La secuencia de estado de concreto también se verificó completa, incluidas respuestas incorrectas y puntuación. La primera descarga sigue siendo grande.

La interfaz nueva se comprobó en PC 1366×768 y Android táctil emulado 390×844. La Planilla también se recorrió en 320×568 y 844×390; en pantalla pequeña se verificó el arrastre para leer el final sin mover los botones. Estos recorridos no generaron errores de JavaScript ni desbordamiento horizontal.

Las comprobaciones de navegador usan Edge de escritorio y emulación táctil de Android. No equivalen a una prueba de memoria/rendimiento en teléfonos físicos ni de manos, agarres y todos los ensayos dentro de un visor. Esta distribución se comparte para pruebas.

GitHub Actions reconstruye los recursos desde payload/manifest.json con verificación SHA-256 y publica site/. No aplicar StatiCrypt ni añadir una pantalla de contraseña en futuras publicaciones.

El repositorio contiene la distribución web compilada, no el proyecto editable de Unity. Las licencias de WebXR Export se incluyen en el sitio.
