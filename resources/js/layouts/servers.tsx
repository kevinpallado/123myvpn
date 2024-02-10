import { Container } from '@/components/container';
import ServerMap from '@/images/server-map.png';
import clsx from 'clsx';
import { css } from '@emotion/css';

export default function Servers() {
    return (
        <section
            id="servers"
            className={clsx(
                'py-14 lg:py-20 bg-white',
                css`
                    background-position: 10% center;
                    background-repeat: no-repeat;
                    background-size: 50vw auto;

                    @media (min-width: 1024px) {
                        background-image: url(${ServerMap});
                    }
                `
            )}>
            <Container>
                <div className="relative aspect-ratio block lg:hidden">
                    <img src={ServerMap} alt="Server Map" />
                </div>
                <div className="flex flex-col lg:w-[50vw] xl:w-2/5 ml-auto text-center lg:text-left">
                    <h3 className="section-title">Servers</h3>
                    <h2 className="section-description mb-4 lg:mb-10">Huge global network of fast VPN servers</h2>
                    <p className="text-[#7A7A7A] font-regular mb-6 md:mb-10 lg:mb-14">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                    </p>

                    <div className="grid grid-cols-2">
                        <div className="flex lg:block flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8">
                                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                            </svg>
                            <div className="text-cyan-500 text-[40px] font-bold leading-tight">
                                120
                                <span>+</span>
                            </div>
                            <div className="font-mono">Locations</div>
                        </div>

                        <div className="flex lg:block flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8">
                                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                            </svg>
                            <div className="text-cyan-500 text-[40px] font-bold leading-tight">
                                20
                                <span>+</span>
                            </div>
                            <div className="font-mono">Countries</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
