import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';
import Venta from '../services/venta.model';


@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async register(@Body() body: { firstName: string; edad: number; email: string; telefono:number; password: string }) {
    const username = await this.registerService.register(body);
    return { message: `Usuario ${username} creado con éxito` };
  }

  @Get()
  async registroVentas(): Promise<Venta[]> {
    return await this.registerService.registroVentas();
  }
}