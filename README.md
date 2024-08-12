# Práctica Final DevOps CI/CD con GitHub

En esta práctica vamos a realizar una serie de pasos que abarcan varios aspectos del curso de DevOps. A continuación, se detalla lo que debe hacerse:

## Pasos a seguir

1. **Crear un repositorio Git con una página web HTML "Hola Mundo"**

   - Inicia un nuevo repositorio en GitHub.
   - Crea un archivo `index.html` con el contenido "Hola Mundo".
   - Realiza los commits necesarios y sube el repositorio a GitHub.

2. **Crear una prueba unitaria para la página creada**

   - Configura un entorno de pruebas con una herramienta como Jest.
   - Crea un archivo de prueba (`index.test.js`) que verifique que el archivo `index.html` contiene el texto "Hola Mundo".

3. **Crear un entorno de prueba local con 1 servidor usando VirtualBox y Vagrant**

   - Configura un entorno de VirtualBox con Vagrant.
   - Asigna un nombre y una IP privada al servidor.

4. **Usar Ansible para instalar Apache en el servidor creado**

   - Escribe un `playbook.yml` para instalar Apache, iniciar el servicio y copiar los archivos HTML al directorio por defecto de Apache.
   - Verifica que la página es accesible desde tu PC utilizando la IP privada configurada.

5. **Subir el repositorio a GitHub y publicar la página en GitHub Pages**

   - Asegúrate de que todos los archivos están en el repositorio.
   - Configura GitHub Pages para publicar la página web creada.

6. **Crear un archivo YAML de GitHub Actions**

   - Configura un flujo de trabajo en GitHub Actions para ejecutar la prueba unitaria automáticamente al actualizar el repositorio.

## Recursos Utilizados

- **Git**: Para el control de versiones.
- **VirtualBox y Vagrant**: Para crear y gestionar el entorno de prueba local.
- **Ansible**: Para la configuración automática del servidor.
- **GitHub Pages**: Para la publicación de la página web.
- **GitHub Actions**: Para la integración continua y pruebas automáticas.

## Ejecución

Para ejecutar los pasos descritos:

1. Clona el repositorio y sigue las instrucciones en cada sección.
2. Utiliza los comandos proporcionados en los archivos de configuración para configurar el entorno y las herramientas.

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un *issue* en el repositorio.

¡Buena suerte con tu práctica final de DevOps CI/CD!

