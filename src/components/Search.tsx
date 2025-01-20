"use client"
import { client } from "@/sanity/lib/client";
export async function fetchProducts() {
    const products = await client.fetch(`*[_type == "product"]`);
    return products;
  }