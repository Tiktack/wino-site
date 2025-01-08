export type PostMetadata = {
	title: string;
	description: string;
	thumbnail: string;
	date: string;
	author: string;
};

export type DocPage = {
	title: string;
	slug: string;
	path: string;
	children: DocPage[] | undefined;
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

// export const getDocPages = () => {
// 	const docPagesRaw = import.meta.glob<DocPage>('/src/routes/docs/**/*.mdx', {
// 		eager: true,
// 		import: 'frontmatter',
// 	});

// 	const docPages = Object.entries(docPagesRaw).map(([path, page]) => {
// 		const slug = path
// 			.replace('/src/routes/docs/', '')
// 			.replace('/index.mdx', '');

// 		return {
// 			...page,
// 			slug,
// 		};
// 	});

// 	return docPages;
// };
// export const getDocsStructure = () => {
// 	const pages = getDocPages();
// 	const structure: DocPage[] = [];

// 	// biome-ignore lint/complexity/noForEach: <explanation>
// 	pages.forEach((page) => {
// 		const parts = page.slug.split('/').filter(Boolean);
// 		let current = structure;

// 		parts.forEach((_, index) => {
// 			const currentSlug = parts.slice(0, index + 1).join('/');
// 			const currentPath = `/docs/${currentSlug}`;
// 			const existing = current.find((item) => item.slug === currentSlug);

// 			if (!existing && index === parts.length - 1) {
// 				current.push({
// 					title: page.title,
// 					slug: currentSlug,
// 					path: currentPath,
// 					children: [],
// 				});
// 			} else if (!existing) {
// 				const newItem = {
// 					title: '',
// 					slug: currentSlug,
// 					path: currentPath,
// 					children: [],
// 				};
// 				current.push(newItem);
// 				current = newItem.children;
// 			} else {
// 				if (existing.children) current = existing.children;
// 			}
// 		});
// 	});

// 	return structure;
// };
