import { Button } from './Button';

export function SpecialIcon({ text, src, alt }) {
    return (
        <span className="inline-flex text-sm rounded px-1 bg-primary-highlightHover items-center gap-[3px]">
            <img className="size-3 rounded-md" src={src} alt={alt} />
            {text}
        </span>
    );
}
