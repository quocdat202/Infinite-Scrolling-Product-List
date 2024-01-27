// src/features/posts/postsSaga.js
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchMenber, fetchMenberSuccess } from 'slices/introduceSlice';
import { AxiosResponse } from 'axios';
import { URL_ } from 'api/introduceApi';

function* getIntroduceSaga() {
    try {
        const res: AxiosResponse = yield call(axios.get, `${URL_}/api/data`); // Thay đổi URL theo yêu cầu của bạn
        const { data } = res;
        yield put(fetchMenberSuccess(data));
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

export function* introduceSaga() {
    yield takeLatest(fetchMenber.type, getIntroduceSaga);
}
