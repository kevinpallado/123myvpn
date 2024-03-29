import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import TestimonialBg from '@/images/testimonial-bg.png';
import clsx from 'clsx';
import { css } from '@emotion/css';

const steps = [
    {
        title: 'Purchase your plan',
        description: 'pick the plan that suits you',
        bgGradient: 'linear-gradient(135deg, #febb97 0%, #f73e6e 100%)'
    },
    {
        title: 'Download the app',
        description: 'choose the right app for your device',
        bgGradient: 'linear-gradient(315deg, #2058ba 0%, #41d9f2 100%)'
    },
    {
        title: 'Connect',
        description: 'turn on the VPN and enjoy',
        bgGradient: 'linear-gradient(135deg, #3fdbb1 0%, #26b6cb 100%)'
    }
];

export default function Mechanism() {
    return (
        <section id="mechanism" aria-labelledby="mechanisms-title" className="py-20">
            <Container className={clsx(
                'text-center',
                css`
                        background-image: url(${TestimonialBg});
                        background-position: 12% 5%;
                        background-repeat: no-repeat;
                    `
            )}>
                <div className="mb-28">
                    <h3 className="section-title">How it works</h3>
                    <h2 className="section-description">Fell the simplicity</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
                    {steps.map((step, index) => (
                        <div className="flex items-center gap-6">
                            <div
                                className={clsx(
                                    'flex items-center justify-center font-bold w-[120px] h-[120px] text-[40px] leading-[60px] text-white rounded-3xl shadow-[0_4px_12px_0_rgba(0,0,0,0.06)]',
                                    css`
                                        background-color: transparent;
                                        background-image: ${step.bgGradient};
                                    `
                                )}>
                                0{index + 1}
                            </div>
                            <div className="flex-1 min-w-0 text-left text-[#272e36]">
                                <h5 className="text-2xl leading-[60px] font-bold">{step.title}</h5>
                                <span className="text-base leading-[24px] font-mono font-bold opacity-80">
                                    {step.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center rounded-3xl shadow-[0_4px_12px_0_rgba(0,0,0,0.06)] pt-10 pb-14 px-14">
                    <div className="flex-1 min-w-0 text-left sm:mb-0 mb-5">
                        <h2 className="text-[40px] leading-[50px] text-[#272e36] font-bold mb-5">Get 123MyVPN</h2>
                        <h5 className="text-xl">Download to get private & secure Internet</h5>
                    </div>
                    <div>
                        <Button
                            size="lg"
                            className={clsx(
                                'btn-cta',
                                css`
                                    width: 200px;
                                    height: 50px;
                                `
                            )}>
                            Try now for free
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
