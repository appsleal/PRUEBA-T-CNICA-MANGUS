import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dtos';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { EditEmployeesDto } from './dtos/edit-employee.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private readonly employeeService:EmployeesService){}

    @Post()
    createOne(
        @Body() dto:CreateEmployeeDto,
        @Body() dto2:CreateUsersDto
    ){
        return this.employeeService.createOne(dto,dto2).catch(err => {
            throw new HttpException({
              message: err.message
            }, HttpStatus.BAD_REQUEST);
          })
    }

    @Get()
    async getMany(){
        const data = await this.employeeService.getMany()
        return {
            ok:true,
            data
        }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        const data = await this.employeeService.getOne(id)
        return {
            ok:true,
            data
        }
    }

    @Put(':id')
    editOne(
        @Param('id',ParseIntPipe) id:number,
        @Body() dto: EditEmployeesDto    
    ){
        return this.employeeService.editOne(id,dto)
    }

    @Delete(':id')
    deleteOne(
        @Param('id',ParseIntPipe) id:number
    ){
        return this.employeeService.deleteOne(id)
    }
}
