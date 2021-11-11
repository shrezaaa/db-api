import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
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
    if (body.publisher_id) {
      return this.publisherService.editPublisher(body);
    } else {      
      return this.publisherService.addPublisher(body);
    }
  }

  @Delete('delete')
  deletePublisher(@Query() query){
    return this.publisherService.deletePublisher(query)
  }
}
