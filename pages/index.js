//pages 폴더명은 무조건 pages / components는 달라도 됨
import React from 'react';
import AppLayout from "../components/AppLayout";
import { useSelector } from 'react-redux';
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {

  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  )
}

export default Home;