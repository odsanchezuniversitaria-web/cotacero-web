# CotaCero — pruebas web

Build Unity 0.1.21 para probar en navegador de PC y celular, con entrada experimental a VR mediante WebXR en Meta Quest Browser.

Abre https://odsanchezuniversitaria-web.github.io/cotacero-web/ e introduce la clave de prueba compartida por separado. En celular usa orientación horizontal. En Quest Browser pulsa «Entrar / salir de VR»; entrar o salir reinicia la actividad actual. El botón queda deshabilitado si el navegador no admite una sesión inmersiva.

Verificación: arranque y entrada al nivel 0 comprobados en navegador de escritorio; datos de agarre, botones y poses de mandos comprobados con InputTestFixture. La interacción inmersiva completa y el rendimiento en teléfonos requieren pruebas físicas; no equivalen a la versión Android nativa ya instalada en Quest.

La publicación se realiza con GitHub Actions. Los archivos Brotli se reconstruyen y descomprimen antes de subir el sitio a Pages, que no permite configurar las cabeceras Content-Encoding de Unity. Los fragmentos se verifican por SHA-256.

El repositorio contiene únicamente la distribución web, no el proyecto editable de Unity. La contraseña de acceso de prueba se comparte por separado; no cifra los recursos públicos del juego.

WebXR usa unity-webxr-export 0.25.0 (De-Panther, revisión 1f7a06c57867f300dabfa2bbbee85a6b03fa0005). Las licencias del exportador se distribuyen en el sitio.
