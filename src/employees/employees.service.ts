import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from 'src/users/dtos';
import { users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { EditEmployeesDto } from './dtos/edit-employee.dto';
import { Employees } from './entities/employees.entity';

@Injectable()
export class EmployeesService {

    constructor(
        @InjectRepository(Employees)
        private readonly employeeRepository: Repository<Employees>,
        @InjectRepository(users)
        private readonly userRepository: Repository<users>
    ){}

    async getMany(){
        return await this.employeeRepository.find()
    }
    async getOne(id:number){
        const role = await this.employeeRepository.findOne(id);
        if (!role) throw new NotFoundException('Rol no existe');
        return role;
    }

    async createOne(dto:CreateEmployeeDto,dto2:CreateUsersDto){
        const user = this.userRepository.create(dto2)
        const value = await this.userRepository.save(user)
        dto.users=value.id
        const employee =this.employeeRepository.create(dto)
        return await this.employeeRepository.save(employee)
    }

    async editOne(id:number,dto:EditEmployeesDto){
        const employee = await this.employeeRepository.findOne(id);
        if (!employee) throw new NotFoundException('Rol no existe');

        const editEmployee = Object.assign(employee, dto);
        return await this.employeeRepository.save(editEmployee);
    }
    async deleteOne(id:number){
        return await this.employeeRepository.delete(id);
    }                                                                                                     
}
