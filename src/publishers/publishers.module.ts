import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { PublishersService } from './services/publishers/publishers.service';
import { PublishersController } from './controller/publishers/publishers.controller';

@Module({
  imports: [DbModule],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
