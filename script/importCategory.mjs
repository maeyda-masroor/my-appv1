import { createClient } from '@sanity/client'
import axios from 'axios'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })
// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.TOKEN,
  apiVersion: '2021-08-31'
})
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    })
    console.log(`Image uploaded successfully: ${asset._id}`)
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error)
    return null
  }
}
async function importData() {
  try {
    console.log('Fetching products from API...')
    const response = await axios.get('https://my-appv1.vercel.app/api/product',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'

        
        // Adjust as needed for your server
    },
    })
    const category = response.data
    console.log(`Fetched ${category.length} category`)
    for (const c of category) {
      console.log(`Processing product: ${c.category}`)
      let imageRef = null
      if (c.image) {
        imageRef = await uploadImageToSanity(c.image)
      }
      const sanitycategory = {
        _type: 'category1',
        name: c.category,
        id:c.id,
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
      }
      console.log('Uploading product to Sanity:', sanitycategory.name)
      const result = await client.create(sanitycategory)
      console.log(`Product uploaded successfully: ${result._id}`)
    }
    console.log('Data import completed successfully!')
  } catch (error) {
    console.error('Error importing data:', error)
  }
}
importData()
