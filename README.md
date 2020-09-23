# ProyectoModulo3Matea-API
Documentación del backend del proyecto final del modulo 3

## Introducción
> Esta API se encargará de procesar y manejar una base de datos con usuarios y canciones en formato JSON.

## Estructura y formato de datos


## Funcionalidades
> Usuarios
>> Listar Users: Con el metodo GET mostrara el listado completo de users.
>> Agregar User: Con el metodo POST pasandole sus datos desde el BODY siguiendo el formato especifico para Usuario.
>> Modificar User: Con el metodo POST y especificando el nombre de usuario en la url modificara el Usuario pasandole sus nuevos datos desde el BODY siguiendo el formato especifico para Usuario.
>> Eliminar User: Con el metodo POST y especificando el nombre de usuario en la url.
>> Agregar canciones a songFavs de User: Con el metodo POST y especificando el en la url el nombre del User y la song.
>> Eliminar canciones de songFavs de User: Con el metodo POST y especificando el en la url el nombre de la song.

> Canciones
>> Agregar song: Con el metodo POST pasandole sus datos desde el BODY siguiendo el formato especifico para song.
>> Modificar song: Con el metodo POST y especificando el nombre de la song en la url modificara la song pasandole sus nuevos datos desde el BODY siguiendo el formato especifico para song.
>> Eliminar song: Con el metodo POST y especificando el nombre de la song en la url.
