import { twMerge } from 'tailwind-merge';

export function DividerLine({ className, ...props }) {
    return <div {...props} className={twMerge('border-t border-secondary-border/45 w-full', className)} />;
}
