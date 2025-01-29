export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "customerName", type: "string", title: "Customer Name" },
      { name: "customerEmail", type: "string", title: "Customer Email" },
      { name: "customerAddress", type: "string", title: "Customer Address" },
      { name: "total", type: "number", title: "Total Amount" },
      {
        name: "products",
        type: "array",
        title: "Ordered Products",
        of: [
          {
            type: "object",
            fields: [
              { name: "product", type: "reference", to: [{ type: "product" }] },
              { name: "quantity", type: "number", title: "Quantity" },
            ],
          },
        ],
      },
    ],
  };
  