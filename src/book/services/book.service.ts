import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from 'src/constants';
import { DbService } from 'src/db/service/db/db.service';
import { BookDto } from '../dto/book.dto';

@Injectable()
export class BookService {
  constructor(private dbService: DbService) {}

  async getBooks(model: BookDto) {
    let query: string = 'select * from book ';
    if (model.stockID) {
      query =
        query +
        `inner join book_stock_room on book.book_id = book_stock_room.book_id
      inner join stock_room sr on book_stock_room.stock_room_id = sr.stock_room_id
      where sr.stock_room_id = '` +
        model.stockID + `'`;
    }
    let res = await this.dbService.executeQuery(query);
    if (model.title) {
      res = res.filter((el) => String(el.book_title).includes(model.title));
    }
    return res;
  }
  

  async expensiveBooks() {
    let res = await this.dbService.executeQuery(
      'select * from expensive_books',
    );
    return res;
  }

  async getStocks() {
    const res = await this.dbService.executeQuery('select * from stock_room');
    return res;
  }
}
