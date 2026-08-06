export const showcaseItems = [
    {
        type: 'complete',
        isNew: true,
        title: <CardernirShowcaseTitle />,
        ctaTitle: 'Available on the Apple App Store',
        ctaTitleLink: 'https://apps.apple.com/app/cardernir/id6772876444',
        description:
            'Cardernir is a native SwiftUI flashcard language-learning app that helps you learn more vocabulary using an effective spaced repetition method by simply swiping left and right.',
        descriptionResize: true,
        image: '/cardernir_screenshot.jpeg',
        imageRem: 'max-w-[60rem]',
        imageAlt: 'cardernir app screenshot',
        ctaButton: 'Learn more',
        ctaButtonLink: 'https://www.cardernir.app',
    },
    {
        type: 'inProgress',
        project: {
            title: 'Project Forum',
            description:
                'A community-based forum to help get out the information and knowlegde of the Nigerian people on the web. Helping Nigerians share and get information pertinent to them.',
            github: 'https://github.com/Femosky/project-forum-backend',
        },
    },
    {
        type: 'complete',
        isNew: false,
        title: <RokiShowcaseTitle />,
        ctaTitle: 'Available on the Apple App Store',
        ctaTitleLink: 'https://apps.apple.com/us/app/roki-for-the-african-diaspora/id6740173437',
        description: <RokiShowcaseDescription />,
        image: '/roki-screenshot.jpeg',
        imageAlt: 'roki app screenshot',
        ctaButton: 'Learn more',
        ctaButtonLink: 'https://rokiapp.vercel.app',
    },
    // {
    //     isNew: false,
    //     title: 'MapOfSecrets - Full Stack Web App ',
    //     ctaTitle: 'Try it out!',
    //     ctaTitleLink: 'https://map-of-secrets.vercel.app',
    //     description: 'Interactive Map to Share and View Secrets on the Globe',
    //     image: '/map-of-secrets-screenshot.jpeg',
    //     imageAlt: 'MapOfSecrets web app screenshot',
    //     ctaButton: 'View on GitHub',
    //     ctaButtonLink: 'https://github.com/Femosky/MapOfSecrets',
    // },
    {
        type: 'complete',
        isNew: false,
        title: 'VoiceGPT - Wear OS and Android duo app',
        ctaTitle: '',
        ctaTitleLink: '',
        description: 'AI Voice Assitant to assist you only through talking.',
        image: '/voicegpt.png',
        imageRem: 'max-w-[25rem]',
        imageAlt: 'voice gpt screenshot',
        ctaButton: 'View on GitHub',
        ctaButtonLink: 'https://github.com/Femosky/VoiceGPT',
    },
    // {
    //     isNew: false,
    //     title: 'Klinic - Booking System',
    //     ctaTitle: 'Check out the website.',
    //     ctaTitleLink: 'https://clinic-booking-system-hazel.vercel.app',
    //     description: 'A customizable clinic appointment booking platform.',
    //     image: '/klinic-screenshot.jpeg',
    //     imageAlt: 'klinic screenshot',
    //     ctaButton: 'View on GitHub',
    //     ctaButtonLink: 'https://github.com/Femosky/clinic-booking-system',
    // },
];

function CardernirShowcaseTitle() {
    return (
        <h3 className="text-xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#5856D6] via-[#426BFF] to-[#30B0C7] text-transparent bg-clip-text">
            Cardernir
        </h3>
    );
}

function RokiShowcaseTitle() {
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

function RokiShowcaseDescription() {
    return (
        <p className="text-center text-sm md:text-base max-w-[25rem] font-light opacity-40">
            A native SwiftUI <span className="text-sm italic">(UIKit used as well)</span> app using Firebase to handle
            the backend and database!
        </p>
    );
}
