import { PartialType } from "@nestjs/mapped-types";
import { CreateClientsDto } from "../dtos";


export class EditClientsDto extends PartialType(CreateClientsDto){

}