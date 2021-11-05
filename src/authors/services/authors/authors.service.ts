import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/service/db/db.service';

@Injectable()
export class AuthorsService {
  constructor(private dbService: DbService) {}

  async getAuthors() {
    const res = await this.dbService.executeQuery('select  * from author');
    return res;
  }
}
