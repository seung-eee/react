import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const LogOutWrapper = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    // react에서 배열을 쓸 때는 key 붙어야함
    <Card actions={[
      <div key="twit">짹짹<br />0</div>,
      <div key="follwings">팔로윙<br />0</div>,
      <div key="follwer">팔로워<br />0</div>,
    ]}>
      <Card.Meta title="seung-eee" avatar={<Avatar>SE</Avatar>}></Card.Meta>
      <LogOutWrapper onClick={onLogOut}>로그아웃</LogOutWrapper>
    </Card>
  );
}

export default UserProfile;