import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from 'src/users/dtos/create-users.dto';
import { users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateClientsDto } from './dtos';
import { Clients } from './entities/clients.entity';
import { EditClientsDto } from './entities/edit-clients.dto';

@Injectable()
export class ClientsService {

    constructor(
        @InjectRepository(Clients)
        private readonly clientsRepository: Repository<Clients>,
        @InjectRepository(users)
        private readonly userRepository: Repository<users>
    ){}


    async createOne(dto:CreateClientsDto, dto2:CreateUsersDto){
        const user = this.userRepository.create(dto2)
        const value = await this.userRepository.save(user)
        dto.users=value.id
        const client =this.clientsRepository.create(dto)
        return await this.clientsRepository.save(client)
    }

    async getMany(){
        return await this.clientsRepository.find()
    }
    async getOne(id:number){
        const employee = await this.clientsRepository.findOne(id);
        if (!employee) throw new NotFoundException('Rol no existe');
        return employee;
    }

    async editOne(id:number,dto:EditClientsDto){
        const client = await this.clientsRepository.findOne(id);
        if (!client) throw new NotFoundException('Rol no existe');

        const editClient = Object.assign(client, dto);
        return await this.clientsRepository.save(editClient);
    }
    async deleteOne(id:number){
        return await this.clientsRepository.delete(id);
    }    


}
