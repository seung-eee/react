import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE,
} from '../reducers/post';

// 2) 이쪽으로 전달되어서 axios로 data를 함께 보내줌
function addPostAPI(data) {
  return axios.post('/api/post', data);
}

// 1) action에서 data를 꺼내서
function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);

    yield delay(1000);

    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      data: error.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios.post('/api/post/${data.postId}/comment', data);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);

    yield delay(1000);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: error.response.data
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}