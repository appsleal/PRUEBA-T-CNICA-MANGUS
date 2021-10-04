import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from './../users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateRolesDto, EditRolesDto } from './dtos';
import { Roles } from './entities/roles.entity';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Roles)
        private readonly rolesRepository: Repository<Roles>,
        @InjectRepository(users)
        private readonly usersRepository: Repository<users>
    ){}
    
    async getMany(){
        return await this.rolesRepository.find()
    }
    async getOne(id:number){
        const role = await this.rolesRepository.findOne(id);
        if (!role) throw new NotFoundException('Rol no existe');
        return role;
    }
    async createOne(dto:CreateRolesDto){
        const role = this.rolesRepository.create(dto);
        return await this.rolesRepository.save(role);
    }
    async editOne(id:number,dto:EditRolesDto){
        const role = await this.rolesRepository.findOne(id);
        if (!role) throw new NotFoundException('Rol no existe');

        const editedRole = Object.assign(role, dto);
        return await this.rolesRepository.save(editedRole);
    }
    async deleteOne(id:number){
        return await this.rolesRepository.delete(id);
    }

    async findUsers(id:number){
        return await this.usersRepository.find({role_id:id})
    }

}
