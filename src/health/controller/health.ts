import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../service/health.service';
@Controller('health')
export class HealthController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly healthService: HealthService) {}
  @Get()
  check() {
    return this.healthService.checkHealth();
  }
}
