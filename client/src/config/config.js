import axios from "axios";
const apiConfig = axios.create({
    baseURL : "http://localhost:8000",
    withCredentials : true
});
export default apiConfig;