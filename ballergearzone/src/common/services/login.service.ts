import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RowDataPacket } from 'mysql2';
import { DatabaseService } from './db.service';
import { JwtService } from '@nestjs/jwt';
import usuarioQueries from 'src/usuario/queries/usuario.queries';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private dbService: DatabaseService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      usuarioQueries.selectByEmail,
      [user.email],
    );

    console.log(resultQuery)
    if (resultQuery.length === 0) {
      throw new HttpException('Acceso denegado', HttpStatus.UNAUTHORIZED);
    }

    const dbUser = {
      email: resultQuery[0].email,
      password: resultQuery[0].password,
      rolID: resultQuery[0].rolID,
      usuarioId: resultQuery[0].usuarioid,
    };
    const isValidPassword =await bcrypt.compare(
      user.contrasenia,
      dbUser.password,
    );
    
    if (!isValidPassword) {
      throw new HttpException('Acceso gente denegado', HttpStatus.UNAUTHORIZED);
    }

    return this.getAccessToken(dbUser);
  }

  getAccessToken(user: any) {
    const payload = { email: user.email, rolID: user.rolID, id:user.usuarioId };
    return {
      email: user.email, 
      rolID: user.rolID,
      accessToken: this.jwtService.sign(payload),
    };
  }
}