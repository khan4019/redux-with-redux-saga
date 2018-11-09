
import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { loadAllProductsAction, productsLoadedAction } from '../actions/asynActions';
import data from '../data/productData.json';

export const fetchPostsApi = () => {
    return data;
    // return fetch(`https://jsonplaceholder.typicode.com/photos`)
    //   .then(res => res.json())
    //   .then(data => { const d = data.slice(0,10); 
    //     console.log(d);
    //     return d;
    // })
  }

export function* fetchPosts() {
    yield put(loadAllProductsAction())
    const posts = yield call(fetchPostsApi);
    yield put(productsLoadedAction(posts))
}

export function* watchGetProducts() {
    /*
      takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery(loadAllProductsAction, fetchPosts)
}

export default function* root() {
    yield all([fork(fetchPosts)])
  }