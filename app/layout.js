import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PageMotion } from '@/components/PageMotion';
import Footer from '@/components/Footer';
import { SiteGrain } from '@/components/SiteGrain';
import {
    OG_IMAGE,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
    sharedOpenGraphImage,
} from '@/lib/siteMetadata';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: `${SITE_NAME}'s Portfolio`,
    authors: [{ name: 'Femi Ojeyemi', url: SITE_URL }],
    creator: 'Femi Ojeyemi',
    publisher: 'Femi Ojeyemi',
    category: 'technology',
    keywords: [
        'Femi Ojeyemi',
        'Olufemi Ojeyemi',
        'full-stack developer',
        'software developer',
        'React developer',
        'iOS developer',
        'SwiftUI developer',
        'Node.js developer',
        'portfolio',
    ],
    alternates: { canonical: '/' },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        type: 'website',
        locale: 'en_CA',
        url: '/',
        siteName: SITE_NAME,
        images: [sharedOpenGraphImage],
    },
    twitter: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        creator: '@olufemiojeyemi',
        card: 'summary_large_image',
        images: [OG_IMAGE],
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${SITE_URL}/#person`,
            name: 'Olufemi Ojeyemi',
            alternateName: 'Femi Ojeyemi',
            url: SITE_URL,
            image: `${SITE_URL}/profile_image_2.jpeg`,
            jobTitle: 'Full-Stack Software Developer',
            sameAs: ['https://github.com/Femosky', 'https://www.linkedin.com/in/femiojeyemi/'],
            knowsAbout: ['React', 'Next.js', 'SwiftUI', 'iOS development', 'Node.js', 'Express.js'],
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: `${SITE_NAME}'s Portfolio`,
            description: SITE_DESCRIPTION,
            inLanguage: 'en-CA',
            author: { '@id': `${SITE_URL}/#person` },
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
                />
                <ThemeProvider>
                    <SiteGrain />
                    <div className="relative z-10 flex min-h-screen flex-col">
                        <Header />
                        <main className="md:pt-36 flex-grow">
                            <PageMotion>{children}</PageMotion>
                        </main>
                        <Footer />
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
