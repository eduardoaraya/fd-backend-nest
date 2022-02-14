import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import UserCreateDto from '../dto/user-create.dto';
import UserUpdateDto from '../dto/user-update.dto';
import { User } from '../models/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get()
  async list() {
    try {
      return { data: await this.userRepository.find() };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post()
  async create(@Body() userCreateDto: UserCreateDto) {
    try {
      const entity = await this.userRepository.create(userCreateDto);
      await this.userRepository.insert(entity);
      return {
        data: {},
        message: 'Success',
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Put(':id')
  async update(@Body() userUpdateDto: UserUpdateDto, @Param() params) {
    try {
      const user = await this.userRepository.findOneOrFail(params.id);
      await this.userRepository.update(user, userUpdateDto);
      return {
        data: {},
        message: 'Success',
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Delete(':id')
  async delete(@Param() params) {
    try {
      await this.userRepository.delete({ id: params.id });
      return {
        data: {},
        message: 'Success',
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  }
}
