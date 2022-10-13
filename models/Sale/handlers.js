const Model = require(".");

const endOfDay = require("date-fns/endOfDay");
const startOfDay = require("date-fns/startOfDay");

async function getSales(queryParams = {}) {
  const { startDate, endDate } = queryParams;
  if (!startDate || !endDate) {
    throw new Error("The API needs start date and end data parameters");
  }
  const sales = await Model.find({
    date: {
      $gte: startOfDay(new Date(startDate)),
      $lte: endOfDay(new Date(endDate)),
    },
  });
  return sales;
}

async function postSale(payload) {
  const { productId, price, name, date, owner } = payload;

  const sale = new Model({
    productId,
    name,
    price,
    date: new Date(date),
    owner,
  });
  const response = await sale.save();
  return response;
}

async function deleteSale(saleId) {
  const response = await Model.findOneAndDelete({ _id: saleId });
  return response;
}

module.exports = {
  getSales,
  postSale,
  deleteSale,
};
