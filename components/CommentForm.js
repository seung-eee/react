import { Form, Button, Input } from 'antd';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.user.me?.id);

  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  const { addCommentDone } = useSelector((state) => state.post);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone])

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId, id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">삐약</Button>
      </Form.Item>
    </Form>
  )
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;