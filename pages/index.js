//pages 폴더명은 무조건 pages / components는 달라도 됨

import AppLayout from "../components/AppLayout";

const Home = () => {
    return (
        <AppLayout>
            <div>
                Hello, Next!
            </div>
        </AppLayout>
    )
}

export default Home;