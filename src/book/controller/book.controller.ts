import { Controller, Get } from '@nestjs/common';
import { BookService } from '../services/book.service';

@Controller('book')
export class BookController {

  constructor(private bookService:BookService){}

  @Get('sample')
  ff() {
    return this.bookService.getSample()
  }
}
