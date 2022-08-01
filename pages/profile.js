import AppLayout from "../components/AppLayout";

//next.js = 프론트 서버가 있기 때문에 서버사이드렌더링까지 바로 해줌
const Profile = () => {
    return (
        <AppLayout>
            <div>내 프로필</div>
        </AppLayout>    
    )
}

export default Profile;