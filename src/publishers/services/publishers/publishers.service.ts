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
    const res = await this.dbService.executeQuery(
      `call publisher_add(
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

  async editPublisher(body: any) {
    const res = await this.dbService.executeQuery(
      `call publisher_edit(
        '${body.publisher_id}',
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

  async deletePublisher(query: any) {
    const res = await this.dbService.executeQuery(
      `call publisher_delete('${query.publisher_id}')`,
    );
    return res;
  }
}
