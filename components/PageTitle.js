export function PageTitle({ pageTitle, subTitle }) {
    return (
        <section className="mb-10 md:mb-24">
            <h2 className="text-base sm:text-2xl font-semibold text-[#EA4335] mb-2">{pageTitle}</h2>
            {subTitle && <h3 className="text-primary font-light text-sm md:text-base">{subTitle}</h3>}
        </section>
    );
}
