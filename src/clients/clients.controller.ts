import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dtos';
import { ClientsService } from './clients.service';
import { CreateClientsDto } from './dtos';
import { EditClientsDto } from './entities/edit-clients.dto';

@Controller('clients')
export class ClientsController {

    constructor(private readonly clientService:ClientsService){}

    @Post()
    createOne(
        @Body() dto:CreateClientsDto,
        @Body() dto2:CreateUsersDto

    ){
        return this.clientService.createOne(dto,dto2).catch(err => {
            throw new HttpException({
              message: err.message
            }, HttpStatus.BAD_REQUEST);
          })
    }


    @Get()
    async getMany(){
        const data = await this.clientService.getMany()
        return {
            ok:true,
            data
        }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        const data = await this.clientService.getOne(id)
        return {
            ok:true,
            data
        }
    }

    @Put(':id')
    editOne(
        @Param('id',ParseIntPipe) id:number,
        @Body() dto: EditClientsDto    
    ){
        return this.clientService.editOne(id,dto)
    }

    @Delete(':id')
    deleteOne(
        @Param('id',ParseIntPipe) id:number
    ){
        return this.clientService.deleteOne(id)
    }
}
