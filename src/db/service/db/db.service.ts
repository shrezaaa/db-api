import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class DbService {
  private readonly logger = new Logger('g1');

  constructor(@Inject(PG_CONNECTION) private pool: Pool) {
    this.pool.query('SET search_path TO bookstore');
  }

  // executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
  //   this.logger.debug(`Executing query: ${queryText} (${values})`);
  //   return this.pool.query(queryText, values).then((result: QueryResult) => {
  //     this.logger.debug(`Executed query, result size ${result.rows.length}`);
  //     return { ...result.rows, messages: [] };
  //   });
  // }

  executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    return this.pool.query('SET search_path TO bookstore;' + queryText, values).then((result: QueryResult) => {
      this.logger.debug(`Executed query, result size ${result[1].rows.length}`);
      return [ ...result[1].rows ];
    });
  }
}
