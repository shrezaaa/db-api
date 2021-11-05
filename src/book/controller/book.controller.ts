import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from '../services/book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  function() {
    return this.bookService.getBooks();
  }
}
