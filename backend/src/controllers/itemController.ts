import { Request, Response } from "express";
import Item from "../models/item";

const create_item = (req: Request, res: Response) => {
  const item = new Item(req.body);
  item
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const all_items = (req: Request, res: Response) => {
  Item.find()
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      console.log(error);
    });
};

const one_item = (req: Request, res: Response) => {
  const id = req.params.id;
  Item.findById(id)
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((error) => {
      console.log(error);
    });
};

const delete_item = (req: Request, res: Response) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id)
    .then((item) => {
      if (item) {
        res.status(204).send(item);
      }
      res.status(404).send("Not Found");
    })
    .catch((error) => {
      console.log(error);
    });
};

const update_item = (req: Request, res: Response) => {
  const id = req.params.id;

  Item.findByIdAndUpdate(id, {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  })
    .then((item) => {
      if (item) {
        res.status(200).send(item);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { create_item, all_items, one_item, delete_item, update_item };
