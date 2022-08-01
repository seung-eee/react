import AppLayout from "../components/AppLayout";
import Head from "next/head";

//next.js = 프론트 서버가 있기 때문에 서버사이드렌더링까지 바로 해줌
const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        내 프로필
      </AppLayout>
    </>
  )
}

export default Profile;