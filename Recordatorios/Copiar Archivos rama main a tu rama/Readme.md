 # Instrucciones para Mover Archivos entre Ramas en Git


## Cambiar a la Rama de Destino

Primero, asegúrate de estar en la rama a la que deseas mover los archivos.

```bash

git remote -v 

```

### Si no estas en tu rama podras cambiarla con este comando

```bash

git checkout rama-y

```

## Copiar Archivos de la Rama de Origen

Con este comando podras copiar los archivos de la (rama-x) en la rama actual en la que estas

```bash

git checkout rama-x -- .

```

### Explicacion

Utiliza el comando `git checkout` para extraer todos los archivos de la rama de origen. El uso de `.` indica que deseas copiar todos los archivos y carpetas.


## Revisar los Cambios


Antes de confirmar los cambios, es recomendable revisar qué archivos han sido modificados o añadidos.

```bash

git status

```

## Agregar los Archivos


Una vez que estés satisfecho con los cambios, agrega los archivos al área de preparación.

```bash

git add .

```

## Confirmar los Cambios


Realiza un commit para guardar los cambios en la rama de destino.

```bash

git commit -m "Transferir archivos de rama-x a rama-y"

```



