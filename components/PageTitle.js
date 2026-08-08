export function PageTitle({ pageTitle, subTitle }) {
    return (
        <section className="mb-12 md:mb-20">
            <h2 className="mb-2 text-base font-medium text-[#EA4335] sm:text-2xl">{pageTitle}</h2>
            {subTitle && <h3 className="text-sm font-normal text-primary md:text-base">{subTitle}</h3>}
        </section>
    );
}
