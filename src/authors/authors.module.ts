import { Module } from '@nestjs/common';
import { AuthorsController } from './controller/authors/authors.controller';
import { AuthorsService } from './services/authors/authors.service';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
