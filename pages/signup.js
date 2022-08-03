import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import { useCallback, useState } from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {

  //form 입력시 nickname, password, password-check 모두 동일한 포맷이기 때문에 커스텀훅으로 만들어서 관리하면 편함
  const [id, setId] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  //커스텀훅 버전
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  // 콜백부분을 다르므로 커스텀훅을 사용할 수 없음 -> 콜백부분에서 중복체크도 해줘야하기 때문
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    //password와 passwordCheck이 다른지 확인하는 부분 추가
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  });

  // e.preventdefault가 자동으로 되게 때문에 따로 설정할 필요 없음
  // e.preventdefault = <a>, <submit> 할 때 특정 사이트로 이동하거나, 값을 전송하며 창이 새로고침 되는 것을 막아줌
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            {/* htmlFor에 input의 아이디나 네임을 적어 연결함(label과 input을 연결함) */}
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId}></Input>
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}></Input>
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword}></Input>
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <br />
            <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}></Input>
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입을 동의합니다.</Checkbox>
            {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup;