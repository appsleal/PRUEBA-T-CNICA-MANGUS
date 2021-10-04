import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEmployeeDto{

    @IsString()
    name:string;

    @IsString()
    lastname:string;

    @IsString()
    address:string;

    @IsString()
    phone:string;

    @IsNumber()
    @IsOptional()
    users:number;

}