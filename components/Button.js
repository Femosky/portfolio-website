import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
    [
        'inline-flex',
        'items-center',
        'justify-center',
        'gap-2',
        'rounded-full',
        'border',
        'border-transparent',
        'font-medium',
        'transition-colors',
        'duration-150',
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-secondary-border',
    ],
    {
        variants: {
            variant: {
                default: ['bg-primary-highlightHover', 'text-primary-hover', 'hover:bg-secondary-hoverHover'],
                dark: ['bg-secondary-dark', 'text-secondary-onDark', 'hover:bg-secondary-darkHover'],
                light: ['bg-secondary-hover', 'text-primary-hover', 'hover:bg-secondary-hoverHover'],
                hollow: [
                    'border-secondary-border/40',
                    'bg-primary-highlight/70',
                    'text-primary-hover',
                    'hover:bg-primary-highlightHover',
                ],
                hot: ['bg-secondary-hot', 'text-white', 'hover:bg-secondary-hotHover'],
            },
            size: {
                default: ['px-4', 'py-2', 'text-sm'],
                round: ['p-2'],
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export function Button({ as: Component = 'button', variant, size, className, ...props }) {
    return <Component {...props} className={twMerge(buttonStyles({ variant, size }), className)} />;
}
