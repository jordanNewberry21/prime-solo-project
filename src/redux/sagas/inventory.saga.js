import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProduct() {
    try { // getting inventory from db table "product"
        const response = yield axios.get('api/inventory');
        yield put({ type: 'SET_ALL', payload: response.data });
    } catch (error) {
        console.log('error with inventory get request.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* addProduct(action) {
    try { // post route adding new item to inventory
        yield axios.post('/api/inventory', action.payload);
        yield put({ type: 'FETCH_ALL' });
    } catch (error) {
        console.log('error adding item to DB.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* deleteProduct(action) {
    try { // delete item by id
        const id = action.payload;
        yield axios.delete(`/api/inventory/${id}`);
        yield put({ type: 'FETCH_ALL' })
    } catch (error) {
        console.log('error deleting item from DB.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* updateProduct(action) {
    try { // update whole item by id with new item as payload
        const id = action.payload.id;
        yield axios.put(`/api/inventory/${id}`, action.payload);
        yield put({ type: 'FETCH_ALL' });
    } catch (error) {
        console.log('error updating item in DB.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* featureProduct(action) {
    try { // this route just sends the item id to the route
        // to be used to flip the boolean "featured" value
        const id = action.payload;
        yield axios.put(`api/inventory/${id}`);
        yield put({ type: 'FETCH_ALL' });
    } catch (error) {
        console.log('error updating featured item status in DB.....', error);
        alert('Something went wrong. Please try again.');
    }
}

function* inventorySaga() {
    yield takeLatest('FETCH_ALL', fetchProduct);
    yield takeLatest('POST', addProduct);
    yield takeLatest('DELETE', deleteProduct);
    yield takeLatest('UPDATE', updateProduct);
    yield takeLatest('SET_FEATURE', featureProduct);
  }
  
  export default inventorySaga;