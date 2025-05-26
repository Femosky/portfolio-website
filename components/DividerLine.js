import { twMerge } from 'tailwind-merge';

export function DividerLine({ className, ...props }) {
    return <div {...props} className={twMerge('border-t border-gray-200 w-full', className)} />;
}
