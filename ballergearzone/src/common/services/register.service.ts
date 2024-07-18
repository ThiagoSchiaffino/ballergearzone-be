import { Injectable } from '@nestjs/common';
import { DatabaseService } from './db.service';
import usuarioQueries from 'src/usuario/queries/usuario.queries';
import * as bcrypt from 'bcrypt';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import productoQueries from 'src/usuario/queries/producto.queries';
import Venta from './venta.model';

@Injectable()
export class RegisterService {
  // clave para hash
  salt: string = '$2a$08$W59jWcwio1TiLx4A8iRyTO';

  constructor(private dbService: DatabaseService) {}

  async generateHash(pw: string) {
    // funcion utilitaria para generar el hash de un string
    const hash = await bcrypt.hash(pw, this.salt);
    return hash;
  }

  async register(user: any): Promise<any> {
    const encriptedPassword = await this.generateHash(user.password);

    await this.dbService.executeQuery(usuarioQueries.registerUser, [
      user.email,
      encriptedPassword,
      1,
      2,
    ]);

    return user.email;
  }
  async registroVentas(): Promise<Venta[]> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      productoQueries.getVentas,
      [],
    );
    const resultProducto = resultQuery.map((rs: RowDataPacket) => {
      return {
        fecha: rs['fecha'],
        ventaID: rs['ventaID'],
        usuarioID: rs['usuarioID'],
        email: rs['email'],
        equipo: rs['equipo'],
        camisetade: rs['camisetade'],
        precio: rs['precio'],
      };
    });
    return resultProducto;
  }
}