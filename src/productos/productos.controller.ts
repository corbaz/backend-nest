import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Res,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

import { FastifyReply } from 'fastify';

const title = 'Productos';

@Controller('/productos')
export class ProductosController {
  constructor(private _productosService: ProductosService) {}

  @Get('/')
  async findAll(@Res() reply: FastifyReply) {
    const productos = await this._productosService.findAll();

    return reply.view('pages/productos/productos', { title, productos });
  }

  @Get(':id')
  @Render('pages/productos/producto') // Renderiza la plantilla productoDetalle.hbs
  async findOne(@Param('id') id: string) {
    // Llama al servicio para obtener el producto
    const producto = await this._productosService.findOne(+id);

    // if (!producto) {
    //   // Lanza una excepción si el producto no existe
    //   throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    // }

    const title = `Detalles del Producto: ${producto.name}`; // Define un título dinámico
    return { title, producto }; // Retorna un objeto con el título y el producto
  }

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this._productosService.create(createProductoDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this._productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._productosService.remove(+id);
  }
}
