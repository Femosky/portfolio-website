import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PageMotion } from '@/components/PageMotion';
import Footer from '@/components/Footer';
import { SiteGrain } from '@/components/SiteGrain';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: "Femi's Portfolio",
    description: 'A quick and fancy look at my professional suite!',
    openGraph: {
        type: 'website',
        locale: 'en_CA',
        url: 'https://femi-portfolio-gray.vercel.app/blog',
        siteName: "Femi's Portfolio",
    },
    twitter: {
        creator: '@olufemiojeyemi',
        site: '@site',
        card: 'summary_large_image',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans`}>
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
