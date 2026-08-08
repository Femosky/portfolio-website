import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'About',
    description: 'Learn about Femi Ojeyemi’s software development experience, technical skills, and education.',
    path: '/about',
});

export default function AboutLayout({ children }) {
    return children;
}
