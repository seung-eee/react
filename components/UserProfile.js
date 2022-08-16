import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const LogOutWrapper = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    // react에서 배열을 쓸 때는 key 붙어야함
    <Card actions={[
      <div key="twit">짹짹<br />{me.Post.legnth}</div>,
      <div key="follwings">팔로윙<br />{me.Followings.legnth}</div>,
      <div key="follwer">팔로워<br />{me.Followers.legnth}</div>,
    ]}>
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <LogOutWrapper onClick={onLogOut} loading={logOutLoading}>로그아웃</LogOutWrapper>
    </Card>
  );
}

export default UserProfile;