import PostPreview from './PostPreview';

import React from 'react';

function AllPosts({ posts }) {
	function renderPostPriviews() {
		return posts.map((post) => {
			return <PostPreview post={post} key={post.id} />;
		});
	}
	return (
		<>
			<h2>All posts</h2>
			{renderPostPriviews()}
		</>
	);
}

export default AllPosts;
