import { type SchemaTypeDefinition } from 'sanity'
import Category from './Category'
import Product from './Product'
import Review from './Review'
import Order from './Order'
import Cart from './Cart'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Category,
    Product,
    Review,
    Order,
    Cart
  ],
}
