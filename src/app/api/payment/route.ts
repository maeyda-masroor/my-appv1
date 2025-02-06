import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";
import { v4 as uuidv4 } from 'uuid';
export async function POST(req: Request) {
  const order = await req.json();

  try {
    const newOrder = await client.create({
      _type: "order",
      customerName: order.user.name,
      customerEmail: order.user.email,
      customerAddress: order.user.address,
      total: order.total,
      products: order.products.map((item: { productTitle: string, price: number, quantity: number }) => ({
        _key: uuidv4(),
        productTitle: item.productTitle,
        price: item.price,
        quantity: item.quantity,
      })),
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Sanity Error:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
