import { Module } from '@nestjs/common';
import { DocusignService } from './services/docusign.service';
import { DocusignResolver } from './resolvers/docusign.resolver';

@Module({
  providers: [DocusignResolver, DocusignService],
})
export class DocusignModule {}
