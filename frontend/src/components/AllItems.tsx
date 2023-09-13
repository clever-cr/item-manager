import { useState } from "react";
import { ItemProps } from "../util/types";
import { deleteItem, getItem2 } from "../util/api";

import Update from "./forms/Update";
const AllItem = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState("");

  getItem2().then((data) => {
    setData(data);
  });

  const handleClick = (id: string) => {
    setIsClicked(id);
    getItem2(id).then((data) => {
      console.log("dataaaa", data);
    });
  };

  return (
    <div className="grid grid-cols-3 gap-10 p-5">
      {data.map((value: ItemProps) => {
        return (
          <>
            <div className="bg-[#E1EBFA] rounded-md shadow-sm">
              <div className="p-5 flex flex-col gap-3">
                <div className="flex flex-col  gap-2  ">
                  <h1 className="text-lg font-bold lea">{value.name}</h1>
                  <p className="text-base font-light">{value.description}</p>
                  <h1>{value.price}</h1>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      handleClick(value._id);
                    }}
                    className="bg-gradient-to-bl from-[#4397A4] to-[#bbd5fd] py-2 px-3 rounded-sm text-sm font-light"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      deleteItem(value._id);
                    }}
                    className="bg-gradient-to-bl from-red-500 py-2 px-3 rounded-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {isClicked === value._id && (
              <Update id={isClicked} setIsClicked={setIsClicked} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllItem;
