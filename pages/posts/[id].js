import axios from 'axios';
import React from 'react';
import MarkdownIt from 'markdown-it';

function PostPage({ post }) {
	const md = new MarkdownIt;
	const htmlContent = md.render(post.attributes.content);
	return (
		<article>
			<header>
				<h1>{post.attributes.title}</h1>
				<h2>{post.attributes.description}</h2>
			</header>
			<section>
				<div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
			</section>
		</article >
	);
}

export default PostPage;

export async function getStaticProps({ params }) {
	const postRes = await axios.get(`http://localhost:1337/api/posts/${params.id}`);
	const post = postRes.data;

	return {
		props: {
			post: post.data
		}
	};
}

export async function getStaticPaths() {
	const postsRes = await axios.get('http://localhost:1337/api/posts');
	const posts = postsRes.data;

	const paths = posts.data.map((post) => {
		return { params: { id: post.id.toString() } };
	});

	return {
		paths,
		fallback: false
	};
}