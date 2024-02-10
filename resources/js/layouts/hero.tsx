// main components
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import HeroBg from '@/images/hero-bg.png';
import HeroImg from '@/images/hero-img.png';
import checkIcon from '@/images/check.svg';
import clsx from 'clsx';
import { css } from '@emotion/css';

export default function Hero() {
    return (
        <div
            className={clsx(
                'overflow-hidden pt-10 pb-20 lg:pt-24 lg:pb-28',
                css`
                    background-image: url(${HeroBg});
                    background-size: cover;
                `
            )}>
            <Container>
                <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 sm:gap-y-20">
                    <div className="lg:w-3/6 xl:w-2/5 text-center lg:text-left">
                        <h1 className="text-4xl leading-tight md:text-[40px] md:leading-[56px] font-bold tracking-tight text-[#272E36] mb-8">
                            Connect with Confidence
                            <br />
                            Guard Your Privacy
                        </h1>
                        <p className="text-cyan-500">#1 Trusted Leader in VPN</p>
                        <ul className="py-8 space-y-3 mx-auto max-w-max lg:max-w-full" role="list">
                            <li className="flex items-center">
                                <img src={checkIcon} alt={'Check Icon'} className="block -mt-1 h-4" />
                                <span className="ml-4">Double Encryption for Enhanced Security</span>
                            </li>
                            <li className="flex items-center">
                                <img src={checkIcon} alt={'Check Icon'} className="block -mt-1 h-4" />
                                <span className="ml-4">Smart Location Switching for Optimal Performance</span>
                            </li>
                            <li className="flex items-center">
                                <img src={checkIcon} alt={'Check Icon'} className="block -mt-1 h-4" />
                                <span className="ml-4">Adaptive Kill Switch for Uninterrupted Privacy</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 mb-8">
                            <Button
                                size="lg"
                                className={clsx(
                                    'btn-cta',
                                    css`
                                        width: 200px;
                                        height: 50px;
                                    `
                                )}>
                                Only Now 50% Off
                            </Button>
                        </div>
                        <p className="text-sm text-[#272E36]">30-day money-back guarantee</p>
                    </div>
                    <div className="lg:w-3/6 xl:w-3/5">
                        <img
                            src={HeroImg}
                            alt="hero image"
                            className={clsx(
                                'aspect-ratio w-full max-w-lg mx-auto lg:max-w-full',
                                css`
                                    &:hover {
                                        animation-name: animation-buzz-out;
                                        animation-duration: 0.75s;
                                        animation-timing-function: linear;
                                        animation-iteration-count: 1;
                                    }
                                `
                            )}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
