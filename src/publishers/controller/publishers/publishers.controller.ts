import { Controller, Get } from '@nestjs/common';
import { PublishersService } from 'src/publishers/services/publishers/publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private publisherService: PublishersService) {}

  @Get()
  function() {
    return this.publisherService.getPublishers();
  }
}
