# Requerimientos/Instalación

1. NPM, el package manager de Node.js/javascript. [Guía de instalación](https://phoenixnap.com/kb/install-node-js-npm-on-windows).

2. Git, para poder interactuar con éste repo: Aquí la [Guía de instalación](https://phoenixnap.com/kb/how-to-install-git-windows).

3. Makefile (opcional). [Guía de instalación](http://gnuwin32.sourceforge.net/packages/make.html).

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

### Lanzar la web en local (localhost):

Sin Makefile:

```
npm run dev
```

Con Makefile:

```
make run
```

### Hacer una build de la web (generar los ficheros de producción)

Sin Makefile:

```
npm run build
```

Con Makefile:

```
make build
```

### Actualizar la web.

\*Requerimiento: es necesario que haya un cambio en la carpeta `public`.
Sin Makefile:

```
git fetch --prune
git subtree push --prefix public origin gh-pages
git fetch --prune
```

Con Makefile:

```
make deploy
(si falla)
make edeploy
(si falla, probar de hacer "git checkout gh-pages", luego "git checkout main", y volver a probar)
```

# Links

Svelte guide: [sveltejs/omponent-template](https://github.com/sveltejs/component-template)

---
