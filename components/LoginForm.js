//useCallback = 함수를 캐싱하는 것 / useMemo = 값을 캐싱하는 것
import { useCallback, useState, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

//styled 사용할 수 도 있고, >27번 처럼 useMemo를 사용할 수도 있음
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

//setIsLoggedIn = AppLayout.js에 적었던 더미 데이터를 LoginForm으로 넘겨준 것
const LoginForm = ({ setIsLoggedIn }) => {
  //일반 버전(id)
  //나중에는 react-form 같은 라이브러리를 사용하는 것 추천
  // const [id, setId] = useState('');

  // 컴포넌트에 props로 넘어오는 함수는 useCallback을 사용하여 최적화를 해줌
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  // 커스텀훅 버전(password) -> useInput에서 useState와 useCallback을 해주기 때문에 password와 onChangePassword만 넣어주면 됨
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const { logInLoading } = useSelector((state) => state.user)

  const sytle = useMemo(() => ({ marginTop: 10 }), []);

  //antd의 onFinish에는 e.preventDefault();가 이미 적용되어 있어서 쓰지 않아도 됨
  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    //로그인을 하는 순간 IsLoggedIn이 true로 바뀜 => AppLayout.js에 있는 <LoginForm>이 <UserProfile>로 바뀜
    dispatch(loginRequestAction({ email, password }));
  }, [email, password])

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-email'>이메일</label>
        <br />
        <Input name="user-email" value={email} type="email" onChange={onChangeEmail} required></Input>
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required></Input>
      </div>
      <div style={sytle}>
        <Button type='primary' htmlType='submit' loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </FormWrapper>
  );
}

export default LoginForm;