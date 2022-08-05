// saga의 effects
import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

// put => dispatch
// take('login') => 로그인이라는 액션이 실행될 때까지 기다리겠다는 뜻
// all => 배열을 받아서 배열 안에 있는 것들을 한번에 실행시켜줌
// fork => 비동기 함수 호출(결과값이 올 때까지 기다리지 않음)
// call => 동기 함수 호출(결과값이 올 때까지 기다려줌)
// takeEvery => 호출을 여러번 실행할 수 있도록 도와주는 것
// takeLatest => 마지막 호출만 실행하는 것(이미 완료된 것은 놔두고 다음 것을 실행함 / 동시에 호출이 되었을 때(두 호출이 모두 로딩 중일 때) 마지막 호출만 실행함)
// takeLeading => 첫번째 호출만 실행하는 것
// throttle => 2초 동안은 요청을 한번만 보내도록 함 ex) throttle('ADD_POST_REQUEST', addPost, 10000);
// debouncing => 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
// 되도록 서버에서 검증하는 것이 좋음


// *(generator) => 무한의 개념
export default function* rootSaga() {
  // all => 배열을 받아서 배열 안에 있는 것들을 한번에 실행시켜줌
  yield all([
    // fork와 call 둘다 함수를 호출함
    // fork => 비동기 함수 호출(결과값이 올 때까지 기다리지 않음) / call => 동기 함수 호출(결과값이 올 때까지 기다려줌)
    fork(postSaga),
    fork(userSaga),
  ]);
}