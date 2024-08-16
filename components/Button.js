import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(['transition-colors'], {
    variants: {
        variant: {
            default: ['hover:bg-secondary-hover', 'hover:text-secondary-darkHover', 'text-secondary-dark'],
            dark: ['bg-secondary-dark', 'hover:bg-secondary-darkHover', 'text-white'],
            light: ['bg-secondary-hover', 'hover:bg-secondary-darkHover'],
            hot: ['bg-secondary-hot', 'text-white', 'hover:bg-secondary-hotHover'],
        },
        size: {
            default: ['rounded-lg', 'px-5', 'py-2', 'font-medium', 'text-base'],
            round: ['rounded-full', 'items-center', 'justify-center', 'p-2'],
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export function Button({ variant, size, className, ...props }) {
    return <button {...props} className={twMerge(buttonStyles({ variant, size }), className)} />;
}
