import axios from "axios";

const API_GET_PRODUCTS = 'products';

export function getProducts(
    params: { limit: number, skip: number, select: any }
) {
    return axios({
        method: 'get',
        url: 'https://dummyjson.com/' + API_GET_PRODUCTS,
        params
    });

}
