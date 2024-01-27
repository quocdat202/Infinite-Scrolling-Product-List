import { getProducts } from 'api/productsApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProducts, fetchProductsSuccess } from 'slices/productsSlice';

function* getProductsSaga(action: any) {
    try {
        const params = action.payload;
        if (typeof params === 'undefined') {
            throw new Error('Invalid payload format');
        }

        const { data } = yield call(getProducts, params);

        yield put(fetchProductsSuccess(data));
    } catch (error) {
        console.error('Error fetching account data:', error);
    }
}

export function* productsSaga() {
    yield takeLatest(fetchProducts.type, getProductsSaga);
}
