import { IsNumber, IsString } from "class-validator";

export class CreateUsersDto{
    @IsString()
    username:string;

    @IsString()
    password:string;

    @IsNumber() 
    role_id:number;

}