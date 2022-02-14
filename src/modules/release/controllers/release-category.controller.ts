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
import { ReleaseCategoryCreateDto } from '../dto/release-category-create.dto';
import { ReleaseCategoryUpdateDto } from '../dto/release-category-update.dto';
import { ReleaseCategory } from '../models/release-category.entity';

@Controller('release/category')
export class ReleaseController {
  constructor(
    @InjectRepository(ReleaseCategory)
    private releaseCategoryRepository: Repository<ReleaseCategory>,
  ) {}

  @Get()
  async list() {
    try {
      return { data: await this.releaseCategoryRepository.find() };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post()
  async create(@Body() releaseCategoryCreateDto: ReleaseCategoryCreateDto) {
    try {
      const entity = await this.releaseCategoryRepository.create(
        releaseCategoryCreateDto,
      );
      await this.releaseCategoryRepository.insert(entity);
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
  async update(
    @Body() releaseCategoryUpdateDto: ReleaseCategoryUpdateDto,
    @Param() params,
  ) {
    try {
      const entity = await this.releaseCategoryRepository.findOneOrFail(
        params.id,
      );
      await this.releaseCategoryRepository.update(
        entity,
        releaseCategoryUpdateDto,
      );
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
      await this.releaseCategoryRepository.delete({ id: params.id });
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
