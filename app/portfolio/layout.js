import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'Projects',
    description: 'Explore web, iOS, Android, and full-stack software projects built by Femi Ojeyemi.',
    path: '/portfolio',
});

export default function PortfolioLayout({ children }) {
    return children;
}
