import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './service/customers/customers.service';

@Module({
  imports:[DbModule],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
