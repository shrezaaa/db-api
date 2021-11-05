import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { AuthorsController } from './controller/authors/authors.controller';
import { AuthorsService } from './services/authors/authors.service';

@Module({
  imports:[DbModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
