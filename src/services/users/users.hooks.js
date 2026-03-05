const filterdeleted = async (context) => {
  if (context.params.query && context.params.query.deleted) {
    return context;
  } else {
    context.params.query = {
      ...context.params.query,
      deleted: false
    };
    return context;
};
};