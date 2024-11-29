import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  // Crea un nuevo producto en la base de datos
  create(createProductoDto: CreateProductoDto) {
    const newProducto = this.productoRepository.create(createProductoDto);

    return this.productoRepository.save(newProducto);
  }

  // Devuelve todos los productos de la base de datos
  findAll() {
    const productos = this.productoRepository.find();
    //console.log('Productos desde la base de datos:', productos); // Verifica los datos
    return productos;
  }

  // Devuelve un producto por su id de la base de datos
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
