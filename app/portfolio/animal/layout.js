import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'Animal Information Demo',
    description: 'An interactive animal information search project by Femi Ojeyemi.',
    path: '/portfolio/animal',
});

export default function AnimalLayout({ children }) {
    return children;
}
