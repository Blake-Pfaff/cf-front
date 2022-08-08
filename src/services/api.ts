import axios from "axios";
import { AxiosResponse } from "axios";

export const BASE_URL = "http://localhost:3000/fighters/all";

export const API = {
  getAll: (url: string) => {
    return axios.get(url);
  },
};
