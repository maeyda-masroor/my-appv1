import { type SchemaTypeDefinition } from 'sanity'
import Category from './Category'
import Product from './Product'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Category,
    Product
  ],
}
