import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { DbModule } from './db/db.module';
import { AuthorsModule } from './authors/authors.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [BookModule, DbModule, AuthorsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
