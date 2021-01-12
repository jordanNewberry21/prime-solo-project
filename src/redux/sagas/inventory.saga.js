import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProduct() {
    try { // getting inventory from db table "product"
        const response = yield axios.get('api/inventory');
        yield put({ type: 'SET_PRODUCT', payload: response.data });
    } catch (error) {
        console.log('error with inventory get request.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* addProduct(action) {
    try {
        yield axios.post('/api/inventory', action.payload);
        yield put ({ type: 'FETCH_PRODUCT' });
    } catch (error) {
        console.log('error adding item to DB.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* inventorySaga() {
    yield takeLatest('FETCH_PRODUCT', fetchProduct);
    yield takeLatest('POST', addProduct);
  }
  
  export default inventorySaga;