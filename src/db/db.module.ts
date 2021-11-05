import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from 'src/constants';
import { DbService } from './service/db/db.service';

const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: 'g1',
    host: '78.38.35.219',
    database: 'g1',
    password: 'g1',
    port: 5432,
    
  }),
};

@Module({
  providers: [dbProvider, DbService],
  exports:[dbProvider,DbService]
})
export class DbModule {}
