// api/users.js

import dbConnect from "libs/dbConnect";
import ProductHandlers from "models/Product/handlers";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await ProductHandlers.getProducts();
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    case "POST":
      try {
        const product = await ProductHandlers.postProduct(req.body);
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
