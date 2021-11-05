import { Controller, Get } from '@nestjs/common';
import { AuthorsService } from 'src/authors/services/authors/authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  function() {
    return this.authorsService.getAuthors();
  }
}
