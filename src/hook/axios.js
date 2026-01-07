
import axios from "axios";
import { baseurl } from "./base";



export const sendApi={
    create:(data)=>axios.post(baseurl,data),
    get:()=>axios.get(baseurl),
    delete: (id) => axios.delete(`${baseurl}${id}`),
    update: (id, data) => axios.put(`${baseurl}${id}`, data)
}
