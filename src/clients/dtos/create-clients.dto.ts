import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClientsDto{
    @IsNumber()
    @IsOptional()
    users:number;
    
    @IsString()
    name:string;

    @IsString()
    lastname:string;

    @IsString()
    address:string;

    @IsString()
    phone:string;

}