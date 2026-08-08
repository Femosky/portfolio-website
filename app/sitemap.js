import { SITE_URL } from '@/lib/siteMetadata';

const routes = [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: '/about', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/portfolio', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
];

export default function sitemap() {
    return routes.map(({ path, ...metadata }) => ({
        url: `${SITE_URL}${path}`,
        ...metadata,
    }));
}
