import { createPageMetadata } from '@/lib/siteMetadata';

export const metadata = createPageMetadata({
    title: 'Contact',
    description: 'Contact Femi Ojeyemi about software development opportunities, freelance work, and collaboration.',
    path: '/contact',
});

export default function ContactLayout({ children }) {
    return children;
}
