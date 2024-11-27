import axios from "axios";

export const getTransactions = async () => {
  const response = await axios.get("/dishes");

  return response.data;
};
