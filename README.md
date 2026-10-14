# CotaCero — pruebas web

Build Unity 0.1.19 para probar en navegador de PC y celular. En Quest este build se muestra en la ventana del navegador; todavía no incluye sesiones WebXR inmersivas.

La publicación se realiza con GitHub Actions. Los archivos Brotli se reconstruyen y descomprimen antes de subir el sitio a Pages, que no permite configurar las cabeceras Content-Encoding de Unity. Los fragmentos se verifican por SHA-256.

El repositorio contiene únicamente la distribución web, no el proyecto editable de Unity. La contraseña de acceso de prueba se comparte por separado; no cifra los recursos públicos del juego.
