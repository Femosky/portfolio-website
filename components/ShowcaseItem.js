import { Button } from './Button';
import { DividerLine } from './DividerLine';

export function ShowcaseItem({ showcaseItem }) {
    const { imageRem } = showcaseItem;

    return (
        <>
            <DividerLine />

            <div className="flex flex-col items-center gap-5">
                {showcaseItem.isNew && <h2 className="text-red-500 text-3xl font-semibold">New</h2>}

                <div className="flex-1 flex flex-col items-center gap-3">
                    {typeof showcaseItem.title === 'string' ? (
                        <h3 className="flex flex-col md:flex-row items-center justify-center gap-1 text-lg md:text-xl text-center">
                            {showcaseItem.title}
                        </h3>
                    ) : (
                        showcaseItem.title
                    )}

                    <a href={showcaseItem.ctaTitleLink} target="_blank">
                        <h4 className="text-base md:text-lg text-blue-500">{showcaseItem.ctaTitle}</h4>
                    </a>

                    {typeof showcaseItem.description === 'string' ? (
                        <p className="text-center text-sm md:text-base max-w-[25rem] text-black opacity-40">
                            {showcaseItem.description}
                        </p>
                    ) : (
                        showcaseItem.description
                    )}

                    <div className={imageRem ? imageRem : `max-w-[30rem]`}>
                        <img className="rounded-md w-full" src={showcaseItem.image} alt={showcaseItem.imageAlt} />
                    </div>

                    <a href={showcaseItem.ctaButtonLink} target="_blank">
                        <Button variant="hollow" className="mt-7 hover:bg-[#19B49B] hover:bg-opacity-25">
                            {showcaseItem.ctaButton}
                        </Button>
                    </a>
                </div>
            </div>
        </>
    );
}
