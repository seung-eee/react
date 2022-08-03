import { HYDRATE } from 'next-redux-wrapper';

// 초기 state
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpDate: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }
}

// async action creator(비동기 액션 크리에이터) => redux saga
// action
const changeNickname0 = {
  type: 'CHANGE_NICKNAME',
  data: 'Anne',
}

// data가 바뀔 때마다 action을 만드는 것은 비효율적이기 때문에 action을 만드는 함수(action creater)를 만든다.
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  }
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

export const logoutAction = (data) => {
  return {
    type: 'LOG_OUT',
  }
}

// changeNickname('wow');
// store.dispath(changeNickname('hse'));

// reducer => 이전상태와 액션을 통해서 다음상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      }
    default:
      return state;
  }
};

export default rootReducer;