import dbConnect from "libs/dbConnect";
import SaleHandler from "models/Sale/handlers";
const url = require("url");

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const queryObject = url.parse(req.url, true).query;
        const sales = await SaleHandler.getSales(queryObject);
        res.status(200).json({ success: true, data: sales });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;

    case "POST":
      try {
        const sale = await SaleHandler.postSale(req.body);
        res.status(200).json({ success: true, data: sale });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        const sale = await SaleHandler.deleteSale();
        res.status(200).json({ success: true, data: sale });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
