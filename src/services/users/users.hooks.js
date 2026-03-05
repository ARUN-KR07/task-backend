const filterDeleted = async context => {
  // Ensure deleted=false in all find queries
  context.params.query = {
    ...context.params.query,
    deleted: false
  };
  return context;
};

module.exports = {
  before: {
    find: [filterDeleted]  // only attach to find
  }
};