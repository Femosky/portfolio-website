import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'Blog',
    description: 'Software development articles and useful technical reads curated by Femi Ojeyemi.',
    path: '/blog',
});

export default function BlogLayout({ children }) {
    return children;
}
