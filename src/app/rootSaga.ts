import { all } from 'redux-saga/effects';
import { introduceSaga } from 'sagas/introduceSaga';
import { productsSaga } from 'sagas/productsSaga';

export default function* rootSaga() {
    yield all([
        introduceSaga(),
        productsSaga()
    ])
}