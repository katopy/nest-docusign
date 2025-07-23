import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Docusign {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
