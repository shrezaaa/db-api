import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/service/db/db.service';

@Injectable()
export class CustomersService {
  constructor(private dbService: DbService) {}

  async getCustomers() {
    const res = await this.dbService.executeQuery('select  * from customer');
    return res
  }
}
