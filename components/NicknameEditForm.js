import { Form, Input } from 'antd';
import { useMemo } from 'react';

const NicknameEditForm = () => {

  const style = useMemo(() => ({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '20px;'
  }), []);

  return (
    <Form style={style}>
      {/* input 앞에 '닉네임' / input 버튼에 '수정' 이라는 글자를 넣을 수 있음  */}
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;