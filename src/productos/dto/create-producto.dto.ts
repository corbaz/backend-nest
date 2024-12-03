// src/productos/dto/create-producto.dto.ts
// Data Transfer Object(DTO) Archivo que define la forma de los datos que se pueden utilizar para crear un nuevo producto.La clase CreateProductoDto tiene tres propiedades: nombre, descripción y precio.Las propiedades de nombre y descripción son cadenas y la propiedad de precio es un número.Esta clase se utiliza en el método create de la clase ProductosController para crear un nuevo producto en la base de datos.

export class CreateProductoDto {
  name: string;
  description: string;
  price: number;
}
