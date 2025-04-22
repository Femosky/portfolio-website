export const showcaseItems = [
    {
        id: 0,
        isNew: true,
        title: <RokiShowcaseTitle />,
        ctaTitle: 'Available on the Apple App Store',
        ctaTitleLink: 'https://apps.apple.com/us/app/roki-for-the-african-diaspora/id6740173437',
        description: <RokiShowcaseDescription />,
        image: '/roki-screenshot.jpeg',
        imageAlt: 'roki app screenshot',
        ctaButton: 'Learn more',
        ctaButtonLink: 'https://rokiapp.vercel.app',
    },
    {
        id: 1,
        isNew: true,
        title: 'VoiceGPT - Wear OS and Android duo app',
        ctaTitle: '',
        ctaTitleLink: '',
        description: 'AI Voice Assitant to assist your only through talking.',
        image: '/voicegpt.png',
        imageRem: 'max-w-[25rem]',
        imageAlt: 'voice gpt screenshot',
        ctaButton: 'View on GitHub',
        ctaButtonLink: 'https://github.com/gurjotsaini/Group6FinalGroupProject',
    },
    {
        id: 2,
        isNew: false,
        title: 'Klinic - Booking System',
        ctaTitle: 'Check out the website.',
        ctaTitleLink: 'https://clinic-booking-system-hazel.vercel.app',
        description: 'A customizable clinic appointment booking platform.',
        image: '/klinic-screenshot.jpeg',
        imageAlt: 'klinic screenshot',
        ctaButton: 'View on GitHub',
        ctaButtonLink: 'https://github.com/Femosky/clinic-booking-system',
    },
];

export function RokiShowcaseTitle() {
    return (
        <h3 className="flex flex-col md:flex-row items-center justify-center gap-1 text-lg md:text-xl text-center">
            Download my first ever published app,
            <span className="inline-flex items-center gap-1 italic">
                <img className="size-5" src="/roki-logo.png" alt="roki app logo" />
                oki
            </span>
        </h3>
    );
}

export function RokiShowcaseDescription() {
    return (
        <p className="text-center text-sm md:text-base max-w-[25rem] text-black opacity-40">
            A native SwiftUI <span className="text-sm italic text-black opacity-70">(UIKit used as well)</span> app
            using Firebase to handle the backend and database!
        </p>
    );
}
