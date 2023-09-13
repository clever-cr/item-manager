import { useForm, SubmitHandler } from "react-hook-form";
import { getItem2, updateItem } from "../../util/api";
import { useEffect, useState } from "react";

function Update({ id, setIsClicked }: any) {
  const [dummyData, setDummyData] = useState(null);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    getItem2(id).then((data) => {
      setDummyData(data);
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("price", data.price);
    });
  }, [setValue]);

  const onSubmit: SubmitHandler<any> = (data) => {
    updateItem(id, data).then((data) => {
      console.log(data);
    });
    getItem2();
    setIsClicked("");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name")} />
        <input placeholder="description" {...register("description")} />
        <input placeholder="price" {...register("price")} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Update;
