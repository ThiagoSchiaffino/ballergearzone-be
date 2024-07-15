import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';


@Controller('/login')
export class LoginController {

    constructor(private Loginservice: LoginService) { }

    @Post()

    async login(@Body() body: { email: string, contrasenia: string }) {
        return await this.Loginservice.login(body);
        //const user = this.Loginservice.validateUser(body.username body.password);
    }
}
