export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpDate: {},
  loginData: {},
};

// thunk 사용 시
export const loginAction = (data) => {
  return (dispatch, getState) => {
    
    // reducers>index>initialState가 나옴 (initial, user, post)
    const state = getState();

    dispatch(loginRequestAction());
    axios.post('/api/login')
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      })
  }
}

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}

export const loginFailureAction = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
    data,
  }
}

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT_REQUEST',
  }
}

export const logoutSuccessAction = (data) => {
  return {
    type: 'LOG_OUT_SUCCESS',
    data,
  }
}

export const logoutFailureAction = (data) => {
  return {
    type: 'LOG_OUT_FAILURE',
    data,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      }
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      }
  }
};

export default reducer;