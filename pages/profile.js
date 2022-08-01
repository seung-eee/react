import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/followList";

//next.js = 프론트 서버가 있기 때문에 서버사이드렌더링까지 바로 해줌
const Profile = () => {

  const followerList = [{ nickname: "김미나" }, { nickname: "알리" }, { nickname: "바바" }];
  const followingList = [{ nickname: "강남" }, { nickname: "미선" }, { nickname: "영식" }];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm>

        </NicknameEditForm>
        <FollowList header="팔로잉 목록" data={followingList}></FollowList>
        <FollowList header="팔로워 목록" data={followerList}></FollowList>
      </AppLayout>
    </>
  )
}

export default Profile;