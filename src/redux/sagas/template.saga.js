import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* templateFunction() {
    try {
        
        // constructor function code goes here
    } catch (error) {
        
    }
}

function* templateSaga() {
    yield takeLatest('TACO', templateFunction);
    
  }
  
  export default templateSaga;