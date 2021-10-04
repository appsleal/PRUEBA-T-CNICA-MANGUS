import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateRolesDto, EditRolesDto } from './dtos';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private readonly roleService:RolesService){}

    @Get()
    async getMany(){
        const data = await this.roleService.getMany()
        return {
            ok:true,
            data
        }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        const data = await this.roleService.getOne(id)
        return {
            ok:true,
            data
        }
    }

    @Post()
    createOne(
        @Body() dto:CreateRolesDto
    ){
        return this.roleService.createOne(dto)
    }

    @Put(':id')
    editOne(
        @Param('id',ParseIntPipe) id:number,
        @Body() dto: EditRolesDto    
    ){
        return this.roleService.editOne(id,dto)
    }

    @Delete(':id')
    deleteOne(
        @Param('id',ParseIntPipe) id:number
    ){
        return this.roleService.deleteOne(id)
    }

}
