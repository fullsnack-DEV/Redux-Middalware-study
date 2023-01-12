import axios from "axios";

//get all products

let baseURL = "https://fakestoreapi.com/";

export const getAllProducts = (endpoint) => axios.get(baseURL + endpoint);
