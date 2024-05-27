import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { CommonModule } from './common/common.module';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [UsuarioModule, CommonModule, AdministradorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
