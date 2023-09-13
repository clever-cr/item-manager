import axios from "axios";

export async function getItem2(id?: string) {
  const url = id
    ? `http://localhost:3000/oneitem/${id}`
    : `http://localhost:3000/allitems`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (err) {
    console.log("Error ");
    throw err;
  }
}

export async function deleteItem(id: string) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/deleteitem/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error");
  }
}

export async function updateItem(id: string, data: any) {
  try {
    const response = axios.patch(
      `http://localhost:3000/updateitem/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error");
  }
}

export async function createItem(data: any) {
  try {
    const response = axios.post("http://localhost:3000/item", data);
    return response;
  } catch (error) {
    console.log("Error");
  }
}
