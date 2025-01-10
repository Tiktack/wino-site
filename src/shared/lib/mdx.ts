export type PostMetadata = {
	title: string;
	metaTitle: string;
	description: string;
	thumbnail: string;
	date: string;
	author: string;
};

export const getBlogPosts = () => {
	const postsRaw = import.meta.glob<PostMetadata>('/src/routes/blog/**/*.mdx', {
		eager: true,
		import: 'frontmatter',
	});

	const posts = Object.entries(postsRaw).map(([path, post]) => {
		const slug = path
			.replace('/src/routes/blog/', '')
			.replace('/index.mdx', '')
			// TODO: drop
			.replace('.mdx', '');

		return {
			...post,
			slug,
		};
	});

	return posts;
};
