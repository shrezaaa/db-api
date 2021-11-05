import { Controller, Get, Query } from '@nestjs/common';
import { BookDto } from '../dto/book.dto';
import { BookService } from '../services/book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  function(@Query() model: BookDto) {
    if (model.expensiveBooks=='true') return this.bookService.expensiveBooks();
    else return this.bookService.getBooks(model);
  }

  @Get('stocks')
  stockSelection(){
    return this.bookService.getStocks()
  } 

}
