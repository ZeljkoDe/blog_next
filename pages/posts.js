import React from 'react';
import axios from 'axios';
import AllPosts from '../components/AllPosts';

function Posts({ posts }) {
	return (
		<>
			<AllPosts posts={posts} key={posts.id} />
		</>
	);
}

export default Posts;

export async function getStaticProps() {
	const postsRes = await axios.get("http://localhost:1337/api/posts");
	const posts = postsRes.data;
	return {
		props: {
			posts: posts.data
		}
	};
}