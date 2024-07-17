import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
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
  
 @Delete(':productoId')//recibir id de producto
 async eliminarProducto(@Param ("productoId") productoId: number) {
  await this.Productoservice.eliminarProducto (productoId);//linea como la 16 que llama a un producto service. eliminarproducto y pasarlo (id)
} 
}