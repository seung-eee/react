import { StopOutlined } from '@ant-design/icons';
import { List, Button, Card } from 'antd';
import PropTypes from 'prop-types';


const FollowList = ({ header, data }) => {
  return (
    // 그냥 태그 사용한 건 최적화가 필요함
    <List
      // 팔로잉 목록/팔로워 목록 => profile 중 <FollowList header="이부분">
      header={<div>{header}</div>}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      style={{ marginBottom: 20 }}
      size="small"
      loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더보기</Button></div>}
      bordered
      // 더미 데이터(profile 중 followerList/followingList 부분)를 배열로 넣어준 것으로
      // renderItem의 item으로 들어가서 반복문을 돌려줌
      dataSource={data}
      renderItem={(item) => (
        <List.Item sytle={{ marginTop: 20 }}>
          {/* icon은  @ant-design/icons에서 가져옴(지금은 차단 아이콘 사용)*/}
          <Card actions={[<StopOutlined key="stop" />]}>
            {/* item.nickname => 이런식으로 선택해서 배열 사용 */}
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default FollowList;