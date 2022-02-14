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
import { ReleaseOriginCreateDto } from '../dto/release-origin-create.dto';
import { ReleaseOriginUpdateDto } from '../dto/release-origin-update.dto';
import { ReleaseOrigin } from '../models/release-origin.entity';

@Controller('release/origin')
export class ReleaseOriginController {
  constructor(
    @InjectRepository(ReleaseOrigin)
    private releaseOriginRepository: Repository<ReleaseOrigin>,
  ) {}

  @Get()
  async list() {
    try {
      return { data: await this.releaseOriginRepository.find() };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post()
  async create(@Body() releaseCategoryCreateDto: ReleaseOriginCreateDto) {
    try {
      const entity = await this.releaseOriginRepository.create(
        releaseCategoryCreateDto,
      );
      await this.releaseOriginRepository.insert(entity);
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
    @Body() releaseCategoryUpdateDto: ReleaseOriginUpdateDto,
    @Param() params,
  ) {
    try {
      const entity = await this.releaseOriginRepository.findOneOrFail(
        params.id,
      );
      await this.releaseOriginRepository.update(
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
      await this.releaseOriginRepository.delete({ id: params.id });
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
