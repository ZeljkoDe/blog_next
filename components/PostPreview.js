import React from 'react';
import Link from 'next/link';

function PostPreview({ post }) {
	return (
		<Link href={`/posts/${post.id}`} >
			<div className="post__preview">
				<h3 className="post__preview-title">{post.attributes.title}</h3>
				<p className="post__preview-desc">{post.attributes.description}</p>
			</div>
		</Link >
	);
}

export default PostPreview;
