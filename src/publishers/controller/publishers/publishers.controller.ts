import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublishersService } from 'src/publishers/services/publishers/publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private publisherService: PublishersService) {}

  @Get()
  function() {
    return this.publisherService.getPublishers();
  }
  
  @Post('add')
  addPublisher(@Body() body) {
    console.log(body);
    
    return this.publisherService.addPublisher(body);
  }
}
