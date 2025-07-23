import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DocusignService } from '../services/docusign.service';
import { Docusign } from '../entities/docusign.entity';
import { CreateDocusignInput } from '../inputs/create-docusign.input';
import { UpdateDocusignInput } from '../inputs/update-docusign.input';

@Resolver(() => Docusign)
export class DocusignResolver {
  constructor(private readonly docusignService: DocusignService) {}

  @Mutation(() => Docusign)
  createDocusign(
    @Args('createDocusignInput') createDocusignInput: CreateDocusignInput,
  ) {
    return this.docusignService.create(createDocusignInput);
  }

  @Query(() => [Docusign], { name: 'docusign' })
  findAll() {
    return this.docusignService.findAll();
  }

  @Query(() => Docusign, { name: 'docusign' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.docusignService.findOne(id);
  }

  @Mutation(() => Docusign)
  updateDocusign(
    @Args('updateDocusignInput') updateDocusignInput: UpdateDocusignInput,
  ) {
    return this.docusignService.update(
      updateDocusignInput.id,
      updateDocusignInput,
    );
  }

  @Mutation(() => Docusign)
  removeDocusign(@Args('id', { type: () => Int }) id: number) {
    return this.docusignService.remove(id);
  }
}
