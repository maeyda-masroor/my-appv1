import { NextResponse } from "next/server";
import { client } from '../../../sanity/lib/client';

export async function POST(req: Request) {
  const order = await req.json();

  try {
    const newOrder = await client.create({
      _type: "order",
      customerName: order.user.name,
      customerEmail: order.user.email,
      customerAddress: order.user.address,
      products: order.products.map((p: any) => ({
        _key: p.id,
        product: { _type: "reference", _ref: p.id },
        quantity: p.quantity,
      })),
      total: order.total,
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
