import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL = "http://localhost:8080";
const mapboxToken = "pk.eyJ1IjoiamVmZmRydW1tIiwiYSI6ImNranJ4MGV1YTAwNXkzMHF4aXh2Zjg3ejYifQ.EB43i9rvoaESRB6tYe0ICw";
export function fetchProdutcts(){
    return axios (`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saverOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload);
}