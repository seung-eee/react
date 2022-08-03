import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { Card, Popover, Button, Avatar, Image, List, Comment } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import { useCallback, useState } from 'react';
import CommentForm from '../components/CommentForm';
import PostCardContent from '../components/PostCardContent';

//post는 부모(pages>index.js)로부터 받아오고 있음
const PostCard = ({ post }) => {

  const { me } = useSelector((state) => state.user);
  // me.id가 있으면 id가 들어가고, 없으면 undefined로 바꿔주는 옵셔널 체이닝 연산자
  const id = me?.id;
  //const id = useSelector((state) => state.user.me?.id); //이렇게 사용하는 것도 가능

  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);

  const onToggleLike = useCallback(() => {
    //토글코드 => true를 false로 false를 true로 만들 때!
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
        // 배열 안에 넣을 때는 항상 key를 넣어야함!
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              {
                id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </>
                ) : < Button type="danger">신고</Button>
              }
            </Button.Group>
          )
          }>
            <EllipsisOutlined />
          </Popover >
        ]}>
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />} />
        <Image />
      </Card >
      {commentFormOpend && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div >
  )
};

PostCard.propTypes = {
  // post: PropTypes.object.isRequired // 이렇게 적어도 되지만 더 꼼꼼하게 검사할 수도 있음
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    // arrayOf => 객체들의 배열이라는 뜻
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired
};

export default PostCard;