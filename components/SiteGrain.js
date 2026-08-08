function createNoiseTexture() {
    const svg = '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="turbulence" baseFrequency="1.1" numOctaves="4" seed="8" result="a"/><feColorMatrix in="a" type="saturate" values="0" result="b"/><feColorMatrix in="b" type="matrix" values="0 0 0 0 .1 0 0 0 0 .1 0 0 0 0 .1 0 0 0 .16 0" result="c"/><feTurbulence type="fractalNoise" baseFrequency="1.65" numOctaves="2" seed="18" result="d"/><feColorMatrix in="d" type="saturate" values="0" result="e"/><feColorMatrix in="e" type="matrix" values="0 0 0 0 .1 0 0 0 0 .1 0 0 0 0 .1 0 0 0 .09 0" result="f"/><feBlend in="c" in2="f" mode="screen"/></filter><rect width="100%" height="100%" filter="url(#noise)" fill="#000000"/></svg>';

    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const noiseTexture = createNoiseTexture();

export function SiteGrain() {
    return (
        <div
            aria-hidden="true"
            className="site-grain pointer-events-none fixed inset-0 z-0"
            style={{ backgroundImage: noiseTexture }}
        />
    );
}
