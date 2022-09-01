# Requerimientos/Instalación

1. NPM, el package manager de Node.js/javascript. [Guía de instalación](https://phoenixnap.com/kb/install-node-js-npm-on-windows).

2. Git, para poder interactuar con éste repo: Aquí la [Guía de instalación](https://phoenixnap.com/kb/how-to-install-git-windows).

3. Makefile (opcional). [Guía de instalación](http://gnuwin32.sourceforge.net/packages/make.htm) Follow Vasantha Ganesh Response: (https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows)

4. Clona el proyecto: ![Img](https://user-images.githubusercontent.com/83143288/183264967-d8ba9e98-3b7a-45c5-8e65-01bfad604911.png)

5. Con una terminal en la raíz del proyecto, instalar las librerías de Javascript:

```
npm install
```

# Git basics

Los siguientes comandos se deben ejecutar en una terminal situada en la raíz del proyecto.

Para subir cambios al proyecto:

```
git add *
git commit -m "ESTE ES EL MENSAJE GUAPO DE COMMIT TKM TCELA"
git push
```

Para coger nuevos cambios del repositorio:

```
git pull
```

# Interactuar con la web

-   **Lanzar la web en local (localhost)**:

```
npm run dev
```

-   **Desplegar la web**:

Action -> 0.Deploy Website -> Run Workflow -> Branch:main -> Run workflow.

![Img](https://user-images.githubusercontent.com/83143288/187862226-75088a88-1267-47be-b66e-47ca80e69bfb.png)

Si la Github action falla, subir la carpeta `public` con todos los **bundles** en la rama gh-pages.

# Links

Svelte guide: [sveltejs/omponent-template](https://github.com/sveltejs/component-template)

---
