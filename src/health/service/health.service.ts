import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): object {
    return { status: 'ok' };
  }
}
