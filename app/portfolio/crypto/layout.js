import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'Cryptocurrency Symbols Demo',
    description: 'An interactive cryptocurrency symbol browser built by Femi Ojeyemi.',
    path: '/portfolio/crypto',
});

export default function CryptoLayout({ children }) {
    return children;
}
