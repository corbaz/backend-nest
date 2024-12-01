# Comandos Generadores de Componentes

## Controladores
```bash
nest g co <nombre>
```
Manejan las peticiones HTTP y definen los endpoints de la aplicación. Son el punto de entrada para las solicitudes del cliente.

## Servicios
```bash
nest g s <nombre>
```
Contienen la lógica de negocio de la aplicación. Se encargan del procesamiento de datos y operaciones.

## Módulos
```bash
nest g mo <nombre>
```
Organizan el código en bloques funcionales. Agrupan controladores, servicios y otros componentes relacionados.

## Guardias
```bash
nest g gu <nombre>
```
Protegen rutas y métodos. Manejan la autorización y pueden prevenir accesos no autorizados.

## Interceptores
```bash
nest g in <nombre>
```
Añaden lógica extra antes/después de la ejecución del método. Útiles para logging, transformación de datos y manejo de errores.

## Filtros
```bash
nest g fi <nombre>
```
Manejan excepciones de manera centralizada. Procesan errores y devuelven respuestas apropiadas al cliente.

## Pipes
```bash
nest g pi <nombre>
```
Transforman y validan datos de entrada. Aseguran que los datos recibidos cumplan con el formato esperado.

## Gateways
```bash
nest g ga <nombre>
```
Manejan conexiones WebSocket. Permiten la comunicación bidireccional en tiempo real.

## Resolvers
```bash
nest g r <nombre>
```
Procesan operaciones GraphQL. Definen cómo se resuelven las queries y mutations en una API GraphQL.

---

## Guia de NestJS

https://bluuweb.dev/nestjs/crud-mysql.html

---

## Instalar TypeORM y SQLite
    
```bash
bun install --save @nestjs/typeorm typeorm sqlite3 
```

* TypeORM es un ORM (Object-Relational Mapping) para Node.js y TypeScript.
* SQLite 3 

---

## Instalar Handlebars y Servir Archivos Estáticos en NestJS

* hbs: Motor de plantillas Handlebars para Node.js.
* @nestjs/serve-static:

```bash
npm install --save hbs @nestjs/serve-static

bun add hbs @nestjs/serve-static
bun add -d @types/hbs



```

---
Write-Output ("Build Time: {0:N2} seconds" -f ((Measure-Command { npm run build }).TotalSeconds))

Successfully compiled: 22 files with swc (121.62ms)
Build Time: 1,82 seconds

PS C:\www\next-nest\backend> Measure-Command { npm run build }

Days              : 0
Hours             : 0
Minutes           : 0
Seconds           : 22
Milliseconds      : 232
Ticks             : 222329521
TotalDays         : 0,000257325834490741
TotalHours        : 0,00617582002777778
TotalMinutes      : 0,370549201666667
TotalSeconds      : 22,2329521
TotalMilliseconds : 22232,9521

bun i -D @swc/cli @swc/core