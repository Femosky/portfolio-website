export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://femi-portfolio-gray.vercel.app').replace(
    /\/$/,
    '',
);

export const SITE_NAME = 'Femi Ojeyemi';
export const SITE_TITLE = 'Femi Ojeyemi — Full-Stack Software Developer';
export const SITE_DESCRIPTION =
    'Portfolio of Femi Ojeyemi, a full-stack software developer building polished web, iOS, and Node.js applications.';
export const OG_IMAGE = '/opengraph-preview.jpeg';

export const sharedOpenGraphImage = {
    url: OG_IMAGE,
    width: 1731,
    height: 909,
    alt: 'Femi Ojeyemi — Full-Stack Software Developer',
    type: 'image/jpeg',
};

export function createPageMetadata({ title, description, path }) {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            url: path,
            siteName: SITE_NAME,
            locale: 'en_CA',
            type: 'website',
            images: [sharedOpenGraphImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${SITE_NAME}`,
            description,
            creator: '@olufemiojeyemi',
            images: [OG_IMAGE],
        },
    };
}
