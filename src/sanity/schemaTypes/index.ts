import { type SchemaTypeDefinition } from 'sanity'
import Category from './Category'
import Product from './Product'
import Review from './Review'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Category,
    Product,
    Review
  ],
}
