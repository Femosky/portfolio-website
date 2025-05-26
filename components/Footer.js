import { twMerge } from 'tailwind-merge';

export default function Footer({ className, ...props }) {
    return (
        <footer
            {...props}
            className={twMerge('text-primary text-[8px] sm:text-xs text-center py-6 mb-3 md:text-sm', className)}
        >
            © Copyright • 2025 • Femi Ojeyemi
        </footer>
    );
}
