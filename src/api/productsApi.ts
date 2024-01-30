import { URL } from './../constants/index';
import axios from "axios";
const API_GET_PRODUCTS = 'products';
const API_SEARCH_PRODUCTS = 'products/search';

export function getProductsApi(
    params: { limit: number, skip: number, select: any }
) {
    return axios({
        method: 'get',
        url: `${URL}${API_GET_PRODUCTS}`,
        params
    });
}

export function searchProductsApi(
    params: { q: string }
) {
    return axios({
        method: 'get',
        url: `${URL}${API_SEARCH_PRODUCTS}`,
        params
    });
}
