import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';
import { ProductoController } from './controllers/producto.controller';
import { ProductoService } from './services/producto.service';
//import { JwtMiddlewareGuard } from 'src/common/middleware/auth-guard';
//import { RegisterController } from './controllers/register.controller';
//import { RegisterService } from './services/register.service';

@Module({
  imports: [
    JwtModule.register({
      secret:
        'hjfdsalhfdsahfjkdsakreaurceukfbukalsfyuej43243545y47988367+++fdsfjhdsifyhujdshfjkdsahfjkdskgfhjdsgfygsuyejkgfhdjgfsgejfgdjhsdgfhjsekfyhdbsyfjegfjdysgfjyefgydegfhjseyrfeyr63254342343',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [LoginController, RegisterController, ProductoController],
  providers: [LoginService, DatabaseService, UsuarioService, RegisterService, ProductoService],
  exports: [DatabaseService],
})
export class CommonModule {}