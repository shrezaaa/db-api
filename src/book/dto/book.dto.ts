import { IsBoolean, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  title?;

  @IsString()
  stockName?;

  @IsString()
  stockID?;

  @IsBoolean()
  expensiveBooks?;
}
