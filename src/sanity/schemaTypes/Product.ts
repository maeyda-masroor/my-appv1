export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        description: "Name of the product",
      },
      {
        name: 'image',
        title: 'Image URL',
        type: 'image',
        },
      {
        name: "price",
        title: "Price",
        type: "number",
        description: "Price of the product",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        description: "A detailed description of the product",
      },
      {
        name: "discountPercentage",
        title: "Discount Percentage",
        type: "number",
        description: "Discount percentage applied to the product",
      },
      {
        name: "isFeatured",
        title: "Is Featured",
        type: "boolean",
        description: "Whether the product is a featured item",
      },
      {
        name: "isTrending",
        title: "Is Trending",
        type: "boolean",
        description: "Whether the product is trending",
      },
      {
        name: "isLatestProduct",
        title: "Is Latest Product",
        type: "boolean",
        description: "Whether the product is a latest addition",
      },
      {
        name: "stockLevel",
        title: "Stock Level",
        type: "number",
        description: "Available stock of the product",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        description: "Category of the product",
        options: {
          list: [
            { title: "Chair", value: "Chair" },
            { title: "Sofa", value: "Sofa" },
            { title: "Lighting", value: "Lighting" },
            { title: "Table", value: "Table" },
            { title: "Storage", value: "Storage" },
            { title: "Seating", value: "Seating" },
          ],
        },
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
        description: "Rating of the product (out of 5)",
        validation: (Rule:any) => Rule.min(0).max(5),
      },
      {
        name: "color",
        title: "Color",
        type: "array",
        of: [{ type: "string" }],
        description: "Available colors for the product",
      },
      {
        name: "additionalInfo",
        title: "Additional Info",
        type: "text",
        description: "Additional information about the product",
      },
    ],
  };
  