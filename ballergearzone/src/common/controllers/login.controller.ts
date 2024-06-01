import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Controller('login')
export class LoginController {

    constructor(private Loginservice: LoginService, private usuarioService: UsuarioService) { }

    @Post()

    async login(@Body() body: { username: string, password: string }) {
        this.usuarioService.buscarPorEmail(body.username);
        //const user = this.Loginservice.validateUser(body.username body.password);
    }
}
