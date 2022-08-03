// saga의 effects
import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';

// * 표시 X
function logInAPI() {
  return axios.post('/api/login');
}

function* logIn() {
  try {
    const result = yield call(logInAPI);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
    });
  } catch (error) {
    // put = dispatch
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data
    });
  }
}

function* watchLogIn() {
  // take('login') => 로그인이라는 액션이 실행될 때까지 기다리겠다는 뜻
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST');
}

function* watchAddPost() {
  yield take('ADD_POST');
}

// generator => 무한의 개념
export default function* rootSaga() {
  // all => 배열을 받아서 배열 안에 있는 것들을 한번에 실행시켜줌
  yield all([
    // fork와 call 둘다 함수를 호출함
    // fork => 비동기 함수 호출(결과값이 올 때까지 기다리지 않음) / call => 동기 함수 호출(결과값이 올 때까지 기다려줌)
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}