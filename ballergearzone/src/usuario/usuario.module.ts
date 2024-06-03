import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { DatabaseService } from 'src/common/services/db.service';
import { CommonModule } from 'src/common/common.module';
import { LoginService } from 'src/common/services/login.service';

@Module({
    controllers: [],
    providers: [],
    imports:[]
})
export class UsuarioModule {}