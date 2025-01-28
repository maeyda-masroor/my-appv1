// schemas/review.js
export default {
    name: 'review',
    title: 'review',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Reviewer Name',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule:any) => Rule.min(1).max(5),
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }], // Reference to the 'product' document
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  