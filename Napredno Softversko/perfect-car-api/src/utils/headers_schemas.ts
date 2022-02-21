export const headersSchema = {
  $id: 'headersSchema',
  currentPage: {
    type: 'number',
    minimum: 1,
    required: true,
  },
  sort: {
    type: 'number',
    enum: [1, -1],
  },
  limit: {
    type: 'number',
  },
};
