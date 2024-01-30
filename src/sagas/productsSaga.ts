import { getProductsApi, searchProductsApi } from 'api/productsApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProducts, fetchProductsSuccess, fetchSearchProducts, fetchSearchProductsSuccess } from 'slices/productsSlice';

function* getProductsSaga(action: any) {
    try {
        const params = action.payload;
        if (typeof params === 'undefined') {
            throw new Error('Invalid payload format');
        }

        const { data } = yield call(getProductsApi, params);
        if (data) {
            data.statusCode = 200;
            data.messageResponse = 'Success'
            yield put(fetchProductsSuccess(data));
        }

    } catch (error) {
        console.error('Error fetching products data:', error);
    }
}

function* searchProductsSaga(action: any) {
    try {
        const params = action.payload;
        if (typeof params === 'undefined') {
            throw new Error('Invalid payload format');
        }

        const { data } = yield call(searchProductsApi, params);
        if (data) {
            data.statusCode = 200;
            data.messageResponse = 'Success'
            yield put(fetchSearchProductsSuccess(data));
        }
    } catch (error) {
        console.error('Error fetching search products data:', error);
    }
}

export function* productsSaga() {
    yield takeLatest(fetchProducts.type, getProductsSaga);
    yield takeLatest(fetchSearchProducts.type, searchProductsSaga);
}
