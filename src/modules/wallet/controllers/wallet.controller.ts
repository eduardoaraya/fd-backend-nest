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
import { WalletCreateDto } from '../dto/wallet-create.dto';
import { WalletUpdateDto } from '../dto/wallet-update.dto';
import { Wallet } from '../models/wallet.entity';

@Controller('wallet')
export class WalletController {
  constructor(
    @InjectRepository(Wallet)
    private WalletRepository: Repository<Wallet>,
  ) {}

  @Get()
  async list() {
    try {
      return { data: await this.WalletRepository.find() };
    } catch (err) {
      return {
        error: err,
      };
    }
  }

  @Post()
  async create(@Body() walletCreateDto: WalletCreateDto) {
    try {
      const entity = await this.WalletRepository.create(walletCreateDto);
      await this.WalletRepository.insert(entity);
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
  async update(@Body() walletUpdateDto: WalletUpdateDto, @Param() params) {
    try {
      const entity = await this.WalletRepository.findOneOrFail(params.id);
      await this.WalletRepository.update(entity, walletUpdateDto);
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
      await this.WalletRepository.delete({ id: params.id });
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
