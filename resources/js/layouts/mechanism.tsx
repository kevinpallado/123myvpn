import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import clsx from 'clsx';
import { css } from '@emotion/css';

const steps = [
    {
        title: 'Download',
        description: 'Sed ut perspiciatis unde omnis iste natus',
        bgGradient: 'linear-gradient(135deg, #febb97 0%, #f73e6e 100%)'
    },
    {
        title: 'Connect',
        description: 'Sed ut perspiciatis unde omnis iste natus',
        bgGradient: 'linear-gradient(315deg, #2058ba 0%, #41d9f2 100%)'
    },
    {
        title: 'Enjoy',
        description: 'Sed ut perspiciatis unde omnis iste natus',
        bgGradient: 'linear-gradient(135deg, #3fdbb1 0%, #26b6cb 100%)'
    }
];

export default function Mechanism() {
    return (
        <section id="mechanism" aria-labelledby="mechanisms-title" className="py-14 lg:py-20 bg-[#f8faff]">
            <Container className="text-center">
                <div className="mb-16 md:20 lg:mb-28">
                    <h3 className="section-title">How it works</h3>
                    <h2 className="section-description">Fell the simplicity</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 md:20 lg:mb-28 max-w-max lg:max-w-full w-full mx-auto">
                    {steps.map((step, index) => (
                        <div className="flex items-center gap-4 xl:gap-6">
                            <div
                                className={clsx(
                                    'flex items-center justify-center font-bold w-20 xl:w-[120px] h-20 xl:h-[120px] text-xl xl:text-[40px] xl:leading-[60px] text-white rounded-3xl shadow-[0_4px_12px_0_rgba(0,0,0,0.06)]',
                                    css`
                                        background-color: transparent;
                                        background-image: ${step.bgGradient};
                                    `
                                )}>
                                0{index + 1}
                            </div>
                            <div className="flex-1 min-w-0 text-left text-[#272e36]">
                                <h5 className="text-lg xl:text-2xl xl:leading-[60px] font-bold">{step.title}</h5>
                                <span className="text-sm xl:text-base xl:leading-[24px] font-mono font-bold opacity-80">
                                    {step.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-y-10 items-center rounded-3xl shadow-[0_4px_12px_0_rgba(0,0,0,0.06)] pt-8 md:pt-10 pb-10 md:pb-14 px-8 md:px-14">
                    <div className="flex-1 min-w-0 text-center md:text-left">
                        <h2 className="text-4xl md:text-[40px] md:leading-[50px] text-[#272e36] font-bold mb-4 md:mb-5">
                            Get JupiterX VPN
                        </h2>
                        <h5 className="text-lg md:text-xl">Download to get private & secure Internet</h5>
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
