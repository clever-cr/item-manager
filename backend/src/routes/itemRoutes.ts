import express from "express";
import {
  create_item,
  all_items,
  one_item,
  delete_item,
  update_item,
} from "../controllers/itemController";

const router = express.Router();
router.post("/item", create_item);
router.get("/allitems", all_items);
router.get("/oneitem/:id", one_item);
router.delete("/deleteitem/:id", delete_item);
router.patch("/updateitem/:id", update_item);

export default router;
