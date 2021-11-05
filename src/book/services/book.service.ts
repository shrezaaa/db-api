import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from 'src/constants';
import { DbService } from 'src/db/service/db/db.service';

@Injectable()
export class BookService {
  constructor(private dbService: DbService) {}

  async getBooks() {
    const res = await this.dbService.executeQuery('select * from book');
    return res;
  }
}
