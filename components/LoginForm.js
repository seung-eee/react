//useCallback = 함수를 캐싱하는 것 / useMemo = 값을 캐싱하는 것
import { useCallback, useState, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

//styled 사용할 수 도 있고, >27번 처럼 useMemo를 사용할 수도 있음
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  //나중에는 react-form 같은 라이브러리를 사용하는 것 추천
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 컴포넌트에 props로 넘어오는 함수는 useCallback을 사용하여 최적화를 해줌
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  //
  const sytle = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <Form>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required></Input>
      </div>
      <div style={sytle}>
        <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
}

export default LoginForm;