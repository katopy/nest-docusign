import { CreateDocusignInput } from './create-docusign.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDocusignInput extends PartialType(CreateDocusignInput) {
  @Field(() => Int)
  id: number;
}
