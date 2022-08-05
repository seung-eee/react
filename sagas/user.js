import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

// 테스트 코드
// const test = logIn({ tyupe: 'LOG_IN_REQUEST', data: { id: 'seung-eee@gmail.com' } });
// test.next(); // 19번줄까지 실행
// test.next(); // 24번줄까지 실행

function* logIn(action) {
  // 요청 실패에 대비하기 위해서 try catch문 작성
  try {
    // logInAPI로 요청을 보내고 result로 결과를 받음
    // const result = yield call(logInAPI, action.data);  // == call(logInAPI.action.data)
    // call(logInApi, action.data) 함수(logInAPI)와 그 함수의 매개변수(action.data)들이 들어감

    console.log(">>>saga login");

    yield delay(1000);

    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data
    });
  } catch (error) {
    // put = dispatch
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  // 요청 실패에 대비하기 위해서 try catch문 작성
  try {
    // logInAPI로 요청을 보내고 result로 결과를 받음
    // const result = yield call(logOutAPI);

    yield delay(1000);

    yield put({
      type: 'LOG_OUT_SUCCESS'
    });
  } catch (error) {
    // put = dispatch
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data
    });
  }
}

// 비동기 액션 크리에이터
function* watchLogIn() {
  // take('login') => 로그인이라는 액션이 실행될 때까지 기다리겠다는 뜻
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}