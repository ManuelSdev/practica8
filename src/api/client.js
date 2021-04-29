import axios from "axios";
//Saco baseURL de la variable de entorno
const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });


export default client;
