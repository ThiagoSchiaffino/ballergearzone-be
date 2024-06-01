import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';

@Module({
    controllers: [LoginController],
    providers: [LoginService, DatabaseService],
    exports: [DatabaseService]
})
export class CommonModule {}
