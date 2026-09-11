import axios from "axios";
import type {
  Product,
  ProductQuery,
} from "../types/product";

const API_URL = "http://localhost:3001/api/products";

export async function getProducts(
  query?: ProductQuery
): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    API_URL,
    {
      params: query,
    }
  );

  return response.data;
}