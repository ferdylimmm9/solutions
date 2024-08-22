import axios from "axios";

const baseURL = "" as const; // set your api overhere or you can use .env (https://vitejs.dev/guide/env-and-mode#env-files)

const httpClient = axios.create({
  baseURL,
});

export default httpClient;
