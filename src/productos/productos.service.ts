// src/productos/productos.service.ts
// Archivo con la lógica de negocio de la entidad Producto
// Este archivo contiene la lógica de negocio de la entidad Producto. El servicio ProductosService se encarga de realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos. Utiliza el repositorio de la entidad Producto para interactuar con la base de datos y realizar operaciones como crear, leer, actualizar y eliminar productos. El servicio ProductosService se inyecta en el controlador ProductosController para manejar las solicitudes HTTP relacionadas con los productos.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) // Inyecta el repositorio de la entidad Producto
    private productoRepository: Repository<Producto>, // Define el repositorio de la entidad Producto
  ) {}

  // Crea un nuevo producto en la base de datos
  create(createProductoDto: CreateProductoDto) {
    const newProducto = this.productoRepository.create(createProductoDto);

    return this.productoRepository.save(newProducto);
  }

  // Lee todos los productos de la base de datos
  async findAll() {
    const productos = await this.productoRepository.find();
    console.log('Productos desde la base de datos:', productos); // Verifica los datos
    return productos;
  }

  // Lee un producto por su id de la base de datos
  findOne(id: number) {
    return this.productoRepository.findOne({ where: { id } });
  }

  // Actualiza un producto por su id en la base de datos
  async update(id: number, updateProductoDto: UpdateProductoDto) {
    await this.productoRepository.update({ id }, updateProductoDto);

    return this.productoRepository.findOne({ where: { id } });
  }

  // Elimina un producto por su id de la base de datos
  remove(id: number) {
    return this.productoRepository.delete({ id });
  }
}
