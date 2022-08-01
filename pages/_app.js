//_app.js는 index.js의 부모라고 할 수 있음

import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({ Component }) => {
  return (
    <>
      {/* 헤드부분을 수정하고 싶으면 next에서 지원하는 Head를 사용하면 됨 */}
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default App;