import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.TOKEN,
  apiVersion: '2021-08-31',
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to import data to Sanity
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://my-appv1.vercel.app/api/category',{
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Method': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
    
            
            // Adjust as needed for your server
        },
    });
    const products = response.data;
    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.title}`);

      // Upload product image
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Map product to Sanity schema
      const sanityProduct = {
        _type: 'product',
        name: product.name,
        description: product.description,
        price: product.price,
        discountPercentage: 0, // Default value for imported products
        priceWithoutDiscount: product.price,
        rating: product.rating?.rate || 0,
        tags: product.category ? [product.category] : [],
        color: [], // Default empty array for sizes
        stockLevel: product.stockLevel, // Random stock level
        isFeatured: true, // Randomly feature 30% of products
        isTrending: true, // Randomly set 20% of products as trending
        isLatestProduct: true, // Randomly set 50% of products as latest
        color: ['Red', 'Blue', 'Green'], // Default color array
        additionalInfo: 'Imported from external API.', // Default additional info
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      // Upload product to Sanity
      try {
        const result = await client.create(sanityProduct);
        console.log(`Product uploaded successfully: ${result._id}`);
      } catch (error) {
        console.error('Failed to upload product:', sanityProduct.name);
        console.error('Error details:', JSON.stringify(error.response?.data, null, 2));
      }
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import function
importData();
