const filterDeleted = async context => {
  context.params.query = {
    ...context.params.query,
    deleted: false
  };
  return context;
};

module.exports = {
  before: {
    find: [filterDeleted] 
  }
};