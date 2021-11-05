import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/service/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  function() {
    return this.customersService.getCustomers();
  }
}
