import { Injectable } from '@nestjs/common';
import usuarioQueries from './queries/usuario.queries';
import { RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';


@Injectable()
export class UsuarioService {

    constructor(private dbService: DatabaseService) { }

    async buscarPorEmail(email: string) {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            usuarioQueries.selectByEmail,
            [email],
        );
        console.log(resultQuery);
        if(resultQuery){
            return{};
        }
    }
}
