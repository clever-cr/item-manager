import { ChangeEvent, FC, useState } from "react";
import axios from "axios";
import { createItem } from "../util/api";

const AddItem: FC = () => {
  const [itemInfo, setItemInfo] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemInfo({ ...itemInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createItem(itemInfo);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder="name"
          name="name"
          value={itemInfo.name}
          onChange={handleChange}
        />
        <input
          placeholder="description"
          name="description"
          value={itemInfo.description}
          onChange={handleChange}
        />
        <input
          placeholder="price"
          name="price"
          value={itemInfo.price}
          onChange={handleChange}
        />
        <button type="submit">Add item</button>
      </form>

      <div></div>
    </>
  );
};
export default AddItem;
