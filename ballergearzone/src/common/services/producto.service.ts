import { Injectable } from '@nestjs/common';
import productoQueries from 'src/usuario/queries/producto.queries';
import { RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';


@Injectable()
export class ProductoService {

    constructor(private dbService: DatabaseService) { }
    async verProducto(): Promise<any[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
          productoQueries.selectAll,
          [],
        );
    
        const resultProducto = resultQuery.map((rs: RowDataPacket) => {
          return {
            productoId: rs['productoId'],
            precio: rs['precio'],
            imagenes: rs['imagenes'],
            stock: rs['stock'],
            equipo: rs['equipo'],
          };
        });
        return resultProducto;
      }
    }