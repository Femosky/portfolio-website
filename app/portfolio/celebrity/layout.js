import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'Celebrity Information Demo',
    description: 'An interactive celebrity information search project by Femi Ojeyemi.',
    path: '/portfolio/celebrity',
});

export default function CelebrityLayout({ children }) {
    return children;
}
