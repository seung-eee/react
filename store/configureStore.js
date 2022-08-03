import { createWrapper } from 'next-redux-wrapper';
// redux에서 toolkit을 사용하라고 취소선이 그어지는데 사용에는 문제 없음
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  // store 만들기
  // store = 중앙저장소 + reducer
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer);
  return store;
};

// debug가 true면 오류 시 더 자세히 나오기 때문에 dev에서 켜놓는 것이 좋음
const Wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default Wrapper;