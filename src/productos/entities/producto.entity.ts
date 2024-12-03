// src/productos/entities/producto.entity.ts
// Una entidad en TypeORM es una clase que representa una tabla en la base de datos. Cada instancia de la clase corresponde a una fila de esa tabla. Define las columnas (propiedades) y las relaciones de la tabla. En este caso, la clase Producto representa la tabla productos en la base de datos. La clase Producto tiene cuatro propiedades: id, name, description y price. La propiedad id es la clave primaria de la tabla y se genera automáticamente. Las propiedades name, description y price son columnas de la tabla. La clase Producto se utiliza en el módulo ProductosModule para definir la entidad de la base de datos y en el servicio ProductosService para realizar operaciones CRUD en la base de datos.
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Decorador que indica que esta clase es una entidad de base de datos
@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float')
  price: number;
}
