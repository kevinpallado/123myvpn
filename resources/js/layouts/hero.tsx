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
                'overflow-hidden py-15 sm:pt-24 sm:pb-28',
                css`
                    background-image: url(${HeroBg});
                    background-size: cover;
                `
            )}>
            <Container>
                <div className="flex lg:gap-x-10 gap-y-10 sm:gap-y-20">
                    <div className="w-2/5">
                        <h1 className="text-[40px] leading-[56px] font-bold tracking-tight text-[#272E36] mb-8">
                            Connect with Confidence
                            <br />
                            Guard Your Privacy
                        </h1>
                        <p className="text-cyan-500">#1 Trusted Leader in VPN</p>
                        <ul className="mt-8 space-y-3 mb-8" role="list">
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
                        <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
                            <Button
                                size="lg"
                                className={clsx(
                                    'uppercase',
                                    css`
                                        width: 200px;
                                        height: 50px;
                                        padding: 12px 24px;
                                        border-radius: 25px;
                                        background-color: #16a34a;
                                        background-image: linear-gradient(107deg, #16a34a 0%, #107636 100%);
                                        transition: box-shadow 200ms linear;

                                        &:hover {
                                            box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.16);
                                        }
                                    `
                                )}>
                                Only Now 50% Off
                            </Button>
                        </div>
                        <p className="text-sm text-[#272E36]">30-day money-back guarantee</p>
                    </div>
                    <div className="w-3/5">
                        <img
                            src={HeroImg}
                            alt="hero image"
                            className={clsx(
                                'aspect-ratio w-full',
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
