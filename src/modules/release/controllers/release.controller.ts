import { Controller, Get } from '@nestjs/common';

@Controller('release')
export default class ReleaseController {
  @Get()
  index() {
    return {
      message: 'Ok',
    };
  }
}
