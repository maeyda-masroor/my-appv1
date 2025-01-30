import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function POST(req: Request) {
  const order = await req.json();

  try {
    const newOrder = await client.create({
      _type: "order",
      customerName: order.user.name,
      customerEmail: order.user.email,
      customerAddress: order.user.address,
      total: order.total,
      /*product: order.products.map((p: any) => ({
         // ✅ Generates a unique key for each item
        product: { _type: "reference", _ref: p._id }, // Correct reference to a product in Sanity
        quantity: p.quantity, // Quantity of the product ordered
      })),*/
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Sanity Error:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
