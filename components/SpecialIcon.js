import { Button } from './Button';

import Image from 'next/image';

export function SpecialIcon({ text, src, alt }) {
    return (
        <span className="inline-flex text-sm rounded px-1.5 py-1 bg-primary-highlightHover/45 items-center gap-[3px]">
            <Image className="size-3 rounded-md" src={src} width={12} height={12} alt={alt} />
            {text}
        </span>
    );
}
