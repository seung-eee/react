import { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);

  const imageInput = useRef();

  const [text, setText] = useState('');
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    //짹짹을 눌렀을 때 Input.TextArea 내용 비우기
    setText('');
  }, []);

  //파일 업로드 창 띄우기
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart.form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?"></Input.TextArea>
      <div>
        <input type="file" multiple hidden ref={imageInput}></input>
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v}></img>
          </div>
        ))}
      </div>
    </Form>
  )
}

export default PostForm;