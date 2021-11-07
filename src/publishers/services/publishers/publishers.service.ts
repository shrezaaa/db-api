import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/service/db/db.service';

@Injectable()
export class PublishersService {
  constructor(private dbService: DbService) {}

  async getPublishers() {
    const res = await this.dbService.executeQuery('select  * from publisher');
    return res;
  }
}
