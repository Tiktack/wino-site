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

export type DocMetadata = {
	title: string;
	metaTitle?: string;
	order?: number;
};

export const getDocRoutes = () => {
	const docsRaw = import.meta.glob<DocMetadata>('/src/routes/docs/**/*.mdx', {
		eager: true,
		import: 'frontmatter',
	});

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const routes: any = [];

	// First pass: Process all non-index files
	for (const [path, meta] of Object.entries(docsRaw)) {
		if (path.endsWith('index.mdx')) continue;
		if (path === '/src/routes/docs/index.mdx') continue;

		const segments = path
			.replace('/src/routes/docs/', '')
			.replace('.mdx', '')
			.split('/');

		let currentLevel = routes;

		for (let index = 0; index < segments.length; index++) {
			const segment = segments[index];
			const isLast = index === segments.length - 1;
			const folderPath = segments.slice(0, index + 1).join('/');
			const indexPath = `/src/routes/docs/${folderPath}/index.mdx`;
			const folderMeta = docsRaw[indexPath];

			const existingRoute = currentLevel.find((r: { path: string }) =>
				r.path.endsWith(segment),
			);

			if (!existingRoute) {
				const newRoute = {
					name: isLast ? meta.title : folderMeta?.title || segment,
					path: `/docs/${folderPath}`,
					order: isLast ? meta.order : (folderMeta?.order ?? 0),
					routes: !isLast ? [] : undefined,
				};

				currentLevel.push(newRoute);
				currentLevel = newRoute.routes || [];
			} else {
				currentLevel = existingRoute.routes || [];
			}
		}
	}

	// Second pass: Update folder metadata from index files
	for (const [path, meta] of Object.entries(docsRaw)) {
		if (!path.endsWith('index.mdx') || path === '/src/routes/docs/index.mdx')
			continue;

		const segments = path
			.replace('/src/routes/docs/', '')
			.replace('/index.mdx', '')
			.split('/');

		let currentLevel = routes;
		let targetRoute = null;

		for (const segment of segments) {
			targetRoute = currentLevel.find((r: { path: string }) =>
				r.path.endsWith(segment),
			);
			if (targetRoute) {
				currentLevel = targetRoute.routes || [];
			}
		}

		if (targetRoute) {
			targetRoute.name = meta.title;
			targetRoute.order = meta.order ?? targetRoute.order;
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const sortRoutes = (routes: any[]) => {
		routes.sort((a, b) => (a.order || 0) - (b.order || 0));
		for (const route of routes) {
			if (route.routes) {
				sortRoutes(route.routes);
			}
		}
		return routes;
	};

	return sortRoutes(routes);
};
