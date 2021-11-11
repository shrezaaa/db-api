import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/service/db/db.service';

@Injectable()
export class PublishersService {
  constructor(private dbService: DbService) {}

  async getPublishers() {
    const res = await this.dbService.executeQuery('select  * from publisher');
    return res;
  }

  async addPublisher(body: any) {
    console.log(`select publisher_add(
      "${body.last_name}",
      "${body.first_name}",
      "${body.email}",
      "${body.province_state}",
      "${body.city_town}",
      "${body.street}",
      "${body.alley}",
      ${body.plaque_number},
      ${body.floor_number},
      ${body.unit_number},
      "${body.zipcode}")`);
    const res = await this.dbService.executeQuery(
      `select publisher_add(
        '${body.first_name}',
        '${body.last_name}',
        '${body.email}',
        '${body.province_state}',
        '${body.city_town}',
        '${body.street}',
        '${body.alley}',
        ${body.plaque_number},
        ${body.floor_number},
        ${body.unit_number},
        '${body.zipcode}')`,
    );
    return res;
  }
}
