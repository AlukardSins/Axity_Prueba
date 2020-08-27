# Prueba tecnica desarrollador Axity

## Contenido
Este repositorio contiene 2 carpetas, una en la que se almacena el lado del cliente y otra en la que se almacena el lado del servidor.

### Servidor
Se desarrollo con una base de datos de MongoDB con el intermediario MongooseJs y ExpressJs todo con base a NodeJs.

Librerias usadas.
>mongoose -> Facilita el uso de MongoDB

>express -> Framework web

>body-parser -> Convierte las peticiones entrantes antes de ser usadas

>cors -> Facilita el uso de CORS en NodeJs

>nodemon -> Permite el reinicio del servidor al detectar cambios

### Cliente
Se desarrollo con Angular con los estilos proporcionados por Bootstrap

## Observaciones
Las tecnologias se seleccionaron en base a conocimientos previos con las mismas, ya que no he avanzado mucho en el desarrollo web pueden estar erroneamente implementadas o no estar optimizadas para lo que se necesita.

Al ser MongoDB una base de datos NoSQL al momento de mostrarlas, en el lado del cliente, se relacionan para poder mostrar la informacion pedida, mas no estan relacionadas en la base de datos, mas que un identificador para saber a cual se relaciona, por lo que en los modelos del cliente se tienen propiedades extras y facilitar esto.

Esas propiedades extras se ven reflejadas en el diagrama entidad relacion adjunto, el modelo en MongoDB solo contiene el id de su relacion como otra propiedad.