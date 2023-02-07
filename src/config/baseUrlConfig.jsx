import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://p-9x7e.onrender.com/products/products",
});
export default HTTP;
