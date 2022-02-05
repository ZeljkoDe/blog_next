import React from 'react';
import axios from 'axios';
import HomeHeader from '../components/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts';

function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />

    </>
  );
}

export default Home;

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  const posts = postsRes.data;
  return {
    props: {
      posts: posts.data
    }
  };
}