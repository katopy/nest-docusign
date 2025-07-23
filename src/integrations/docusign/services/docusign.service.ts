import { Injectable } from '@nestjs/common';
import { CreateDocusignInput } from '../inputs/create-docusign.input';
import { UpdateDocusignInput } from '../inputs/update-docusign.input';
import { Docusign } from '../entities/docusign.entity';

@Injectable()
export class DocusignService {
  create(createDocusignInput: CreateDocusignInput) {
    return 'This action adds a new docusign';
  }

  findAll() {
    return `This action returns all docusign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docusign`;
  }

  update(id: number, updateDocusignInput: UpdateDocusignInput) {
    return `This action updates a #${id} docusign`;
  }

  remove(id: number) {
    return `This action removes a #${id} docusign`;
  }
}
