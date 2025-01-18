export default {
    name: 'category1',
    title: 'category1',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'number',
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'name',
        title: 'name',
        type: 'string',
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image URL',
        type: 'image',
        },
    ],
  };
  