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
            foto: rs['foto'],
            stock: rs['stock'],
            equipo: rs['equipo'],
            descripcion: rs['descripcion'],
            fotodelete: rs['fotodelete'],
            camisetade: rs['camisetade'],
          };
        });
        return resultProducto;
      }
      async verProductoPorZona(zona:string): Promise<any[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
          productoQueries.selectAllByZona,
          [zona],
        );
    
        const resultProducto = resultQuery.map((rs: RowDataPacket) => {
          return {
            productoId: rs['productoId'],
            precio: rs['precio'],
            foto: rs['foto'],
            stock: rs['stock'],
            equipo: rs['equipo'],
            descripcion: rs['descripcion'],
            fotodelete: rs['fotodelete'],
            camisetade: rs['camisetade'],
            zona: rs['zona'],
          };
        });
        return resultProducto;
      }
    }
    