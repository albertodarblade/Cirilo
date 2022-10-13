const Model = require(".");

function convertQueryParams(queryParams) {
  const validQueries = {};
  if (queryParams.name) {
    validQueries.name = new RegExp(queryParams.name, "i");
  }
  return validQueries;
}

async function getProducts(queryParams = {}) {
  const findQuery = convertQueryParams(queryParams);
  const products = await Model.find(findQuery).lean();
  return products;
}

async function postProduct(payload) {
  const { name, lastPrice, priceRecords = [] } = payload;

  const product = new Model({
    name,
    lastPrice,
    priceRecords,
  });
  const response = await product.save();
  return response;
}

module.exports = {
  getProducts,
  postProduct,
};
