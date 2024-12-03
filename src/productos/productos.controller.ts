import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { FastifyReply } from 'fastify';

const title = 'Productos';

@Controller('/productos')
export class ProductosController {
  constructor(private _productosService: ProductosService) { }

  @Get('/')
  async findAll(@Res() reply: FastifyReply) {
    const productos = await this._productosService.findAll();
    const title = 'Productos';
    return reply.view('pages/productos/productos', { title, productos });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() reply: FastifyReply) {
    const producto = await this._productosService.findOne(+id);

    if (!producto) {
      return reply
        .code(404)
        .send({ error: `Producto con ID ${id} no encontrado` });
    }

    const title = `Detalles del Producto: ${producto.name}`;
    return reply.view('pages/productos/producto', { title, producto });
  }

  @Post('/')
  async create(
    @Body() createProductoDto: CreateProductoDto,
    @Res() reply: FastifyReply,
  ) {
    const producto = await this._productosService.create(createProductoDto);

    // Respuesta personalizada
    return reply
      .code(201)
      .send({ message: 'Producto creado exitosamente', producto });
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
    @Res() reply: FastifyReply,
  ) {
    const productoActualizado = await this._productosService.update(
      +id,
      updateProductoDto,
    );

    if (!productoActualizado) {
      return reply
        .code(404)
        .send({ error: `Producto con ID ${id} no encontrado` });
    }

    return reply.code(200).send({
      message: 'Producto actualizado exitosamente',
      producto: productoActualizado,
    });
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Res() reply: FastifyReply) {
    const resultado = await this._productosService.remove(+id);

    if (resultado.affected === 0) {
      return reply
        .code(404)
        .send({ error: `Producto con ID ${id} no encontrado` });
    }

    return reply.code(200).send({ message: 'Producto eliminado exitosamente' });
  }
}
