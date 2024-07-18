import { IsIn, IsInt, IsOptional, IsString, IsDate} from "class-validator"

class Venta {
    @IsDate()
    fecha: Date;

    @IsInt()
    @IsOptional()
    ventaID: number;

    @IsInt()
    usuarioID: number;

    @IsString()
    email: string;

    @IsString()
    equipo: string;

    @IsString()
    camisetade: string;

    @IsInt()
    precio: number;

    
}

export default Venta

