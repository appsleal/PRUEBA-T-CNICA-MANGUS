import { IsString } from "class-validator";

export class CreateRolesDto{
    @IsString()
    descripcion:string;
}