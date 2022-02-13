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
import { ReleaseCreateDto } from '../dto/release-create.dto';
import { ReleaseUpdateDto } from '../dto/release-update.dto';
import { Release } from '../models/release.entity';

@Controller('release')
export class ReleaseController {
  constructor(
    @InjectRepository(Release)
    private releaseRepository: Repository<Release>,
  ) {}

  @Get()
  async list() {
    try {
      return { data: await this.releaseRepository.find() };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post()
  async create(@Body() releaseCreateDto: ReleaseCreateDto) {
    try {
      const entity = await this.releaseRepository.create({
        type: 'new',
        release_date: new Date().toDateString(),
        description: 'Test',
        ...releaseCreateDto,
      });
      console.log(entity);
      await this.releaseRepository.insert(entity);
      return {
        data: {
          message: 'Success',
        },
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Put(':id')
  async update(@Body() releaseUpdateDto: ReleaseUpdateDto, @Param() params) {
    try {
      const entity = await this.releaseRepository.findOneOrFail(params.id);
      await this.releaseRepository.update(entity, releaseUpdateDto);
      return {
        data: {
          message: 'Success',
        },
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
      await this.releaseRepository.delete({ id: params.id });
      return {
        data: {
          message: 'Success',
        },
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  }
}
