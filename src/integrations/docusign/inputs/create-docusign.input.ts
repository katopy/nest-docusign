import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocusignInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
