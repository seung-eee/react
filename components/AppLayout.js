//PropTypes = 부모로부터 전달받은 prop의 데이터 type을 검사하는 것
//(자식 컴포넌트에서 명시해 놓은 데이터 타입과 부모로부터 넘겨받은 데이터 타입이 일치하지 않으면 콘솔에 에러 경고문이 띄워짐)
import propTypes from 'prop-types';
import Link from 'next/link';
//Row, Col = 반응형(그리드)
import { Menu, Input, Row, Col } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

//_app.js = 전체에서 공통인 것들을 넣는 곳이고, Layout은 일부에서 공통인 것들을 만드는 것
const AppLayout = ({ children }) => {

  //setIsLoggedIn을 LoginForm으로 넘겨줌
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>

        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      {/* gutter = 컬럼 사이의 간격을 주는 것 */}
      <Row gutter={8}>
        {/* 24칸 중에 6칸 차지함 - 모바일일 때는 세로로 3칸/데스크탑일 때는 가로로 3칸 */}
        <Col xs={24} md={6}>
          {/* isLoggedIn이 true = <UserProfile> / setIsLoggedIn false = <LoginForm> */}
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* target="_blank는 보안 위험이 있어서 } rel="noreferrer noopener"를 같이 적어줘야함 */}
          <a href="https://github.com/seung-eee" target={"_blank"} rel="noreferrer noopener">Made by seung-eee</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  //children = 태그와 태그 사이의 모든 내용을 표시하기 위해 사용되는 특수한 props
  children: propTypes.node.isRequired,
}

export default AppLayout;