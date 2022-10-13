import dbConnect from "libs/dbConnect";
import SaleHandler from "models/Sale/handlers";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        console.log("delete", req.query);
        const sale = await SaleHandler.deleteSale(req.query.saleId);
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
