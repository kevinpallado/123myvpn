import { Container } from '@/components/container';
import ServerMap from '@/images/server-map.png';
import clsx from 'clsx';
import { css } from '@emotion/css';

export default function Servers() {
    return (
        <section
            id="servers"
            className={clsx(
                'py-24 bg-white',
                css`
                    background-image: url(${ServerMap});
                    background-position: 10% center;
                    background-repeat: no-repeat;
                    background-size: 900px auto;
                `
            )}>
            <Container>
                <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4">
                    <div className="w-full sm:w-2/5 ml-auto sm:mt-0 mt-8">
                        <h3 className="section-title">Servers</h3>
                        <h2 className="section-description">Huge global network of fast VPN servers</h2>
                        <p className="text-[#7A7A7A] font-regular mb-14">
                            <br />Access NextGen Servers in 91 Countries and <br />Connect to our global server network.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8">
                                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                                </svg>
                                <div className="text-cyan-500 text-[40px] font-bold leading-tight">
                                    120
                                    <span>+</span>
                                </div>
                                <div className="font-mono">Locations</div>
                            </div>

                            <div>
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
                </div>
            </Container>
        </section>
    );
}
