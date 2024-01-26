import { Container } from '@/components/container';
import Device from '@/images/device.png';
import clsx from 'clsx';
import { css } from '@emotion/css';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <Container>
                <div className="flex gap-4">
                    <div className="w-2/5">
                        <h3 className="text-lg text-cyan-500 font-bold mb-5">Apps</h3>
                        <h2 className="text-[40px] leading-[50px] font-bold text-[#272E36] mb-10">Protect all your Devices</h2>
                        <p className="text-[#7A7A7A] font-regular">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa voluptas pariatur facilis porro?
                            Architecto repudiandae facere explicabo voluptatem officiis.
                        </p>
                    </div>
                    <div className="w-3/5">
                        <div
                            className={clsx(
                                'relative',
                                css`
                                    transition: transform 250ms cubic-bezier(0.25, 0.88, 0.54, 0.98),
                                        -webkit-transform 250ms cubic-bezier(0.25, 0.88, 0.54, 0.98);
                                    will-change: transform;

                                    opacity: 0.7;
                                `
                            )}>
                            <img
                                src={Device}
                                className={clsx(
                                    'aspect-ratio w-full',
                                    css`
                                        transition-duration: 500ms;

                                        animation-name: animation-bob-float, animation-bob;
                                        animation-duration: 0.3s, 1.5s;
                                        animation-delay: 0s, 0.3s;
                                        animation-timing-function: ease-out, ease-in-out;
                                        animation-iteration-count: 1, infinite;
                                        animation-fill-mode: forwards;
                                        animation-direction: normal, alternate;
                                    `
                                )}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
