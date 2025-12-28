import { Module } from '@nestjs/common';
import { PeppolService } from './peppol.service';

@Module({
  providers: [PeppolService],
  exports: [PeppolService],
})
export class PeppolModule {}

