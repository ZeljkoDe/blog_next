import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';

function HomeLatestPosts({ posts }) {
	const [latestPosts, setLatestPosts] = useState([]);

	useEffect(() => {
		setLatestPosts(posts.slice(0, 5));
	}, [posts]);

	function renderPostPriviews() {
		return latestPosts.map((post) => {
			return <PostPreview post={post} key={post.id} />;
		});
	}

	return (
		<>
			<h2>Latest posts</h2>
			{renderPostPriviews()}
		</>
	);
}

export default HomeLatestPosts;