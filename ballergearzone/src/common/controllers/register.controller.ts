import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';

@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async Register(@Body() body: { firstName: string; edad: number; email: string; telefono:number; password: string }) {
    const username = await this.registerService.register(body);
    return { message: `Usuario ${username} creado con éxito` };
  }
}