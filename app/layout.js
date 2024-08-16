import { Inter } from 'next/font/google';
import './globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "Femi's Porfolio",
    description: 'A quick and fancy look at my professional suite!',
    icons: {
        icon: 'https://example.com/icon.png',
        apple: 'https://example.com/apple-icon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <head>
                <DefaultSeo {...SEO} />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head> */}
            <body className={inter.className}>{children}</body>
        </html>
    );
}
