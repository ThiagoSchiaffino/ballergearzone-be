import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProductoService } from '../services/producto.service';


@Controller('/producto')
export class ProductoController {

    constructor(private Productoservice: ProductoService) { }

@Get()
  async verProducto(): Promise<any[]> {
    return await this.Productoservice.verProducto();
  }
  //@Post()
  //async crearProducto(): Promise<any>
//
}