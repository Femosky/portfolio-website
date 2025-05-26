import { Button } from './Button';

export function SpecialIcon({ text, src, alt }) {
    return (
        <span className="inline-flex text-sm rounded px-1.5 py-1 bg-primary-highlightHover/45 items-center gap-[3px]">
            <img className="size-3 rounded-md" src={src} alt={alt} />
            {text}
        </span>
    );
}
