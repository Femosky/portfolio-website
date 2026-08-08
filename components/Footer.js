import { twMerge } from 'tailwind-merge';

export default function Footer({ className, ...props }) {
    return (
        <footer {...props} className={twMerge('w-full px-4 pb-24 pt-10 md:px-6 md:pb-8 md:pt-14', className)}>
            <div className="glass-nav mx-auto max-w-[48rem] rounded-full px-5 py-3 text-center text-xs font-normal text-primary sm:text-sm">
                © {new Date().getFullYear()} Femi Ojeyemi
            </div>
        </footer>
    );
}
