import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ProductoService } from '../services/producto.service';


@Controller('/producto')
export class ProductoController {

    constructor(private Productoservice: ProductoService) { }

@Get()
  async verProducto(): Promise<any[]> {
    return await this.Productoservice.verProducto();
  }
  @Get(":zona")
  async verProductoPorZona(@Param ("zona")zona:string): Promise<any[]> {
    return await this.Productoservice.verProductoPorZona(zona);
  }
  
}