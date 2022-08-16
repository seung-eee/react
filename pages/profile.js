import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/followList";
import { useSelector } from "react-redux";

//next.js = 프론트 서버가 있기 때문에 서버사이드렌더링까지 바로 해줌
const Profile = () => {

  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm>

        </NicknameEditForm>
        <FollowList header="팔로잉 목록" data={me.Followings}></FollowList>
        <FollowList header="팔로워 목록" data={me.Followers}></FollowList>
      </AppLayout>
    </>
  )
}

export default Profile;