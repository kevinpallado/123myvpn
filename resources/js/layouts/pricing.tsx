'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { css } from '@emotion/css';
import { useState } from 'react';

const plans = [
    {
        name: '1-Month Plan',
        featured: false,
        price: { Monthly: '$0', Annually: '$0' },
        description: 'per month',
        discount: 'Save 0%',
        button: {
            label: 'Get started for free',
            href: '/register'
        },
        bill: '$4.99 billed / month'
    },
    {
        name: '1-Year Plan',
        featured: false,
        price: { Monthly: '$7', Annually: '$70' },
        description: 'per month',
        discount: 'Save 30%',
        button: {
            label: 'Subscribe',
            href: '/register'
        },
        bill: '$36 billed / year'
    },
    {
        name: '2-Year Plan',
        featured: true,
        price: { Monthly: '$199', Annually: '$1,990' },
        description: 'per month',
        discount: 'Save 50%',
        button: {
            label: 'Subscribe',
            href: '/register'
        },
        bill: '$24 billed / year'
    }
];

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
            />
            <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Plan({
    name,
    featured = false,
    price,
    description,
    discount,
    button,
    bill,
    activePeriod
}: {
    name: string;
    featured: boolean;
    price: {
        Monthly: string;
        Annually: string;
    };
    description: string;
    discount: string;
    button: {
        label: string;
        href: string;
    };
    bill: string;
    activePeriod: 'Monthly' | 'Annually';
}) {
    return (
        <div
            className={clsx(
                'flex flex-col items-center justify-center overflow-hidden rounded-3xl px-8 py-12 shadow-[0_4px_12px_0_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]',
                featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
                css`
                    transition: box-shadow 0.3s;
                `
            )}>
            <h3 className={clsx('flex items-center text-lg font-semibold mb-6', featured ? 'text-white' : 'text-[#272E36]')}>
                {name}
            </h3>
            <p
                className={clsx(
                    'relative flex text-[40px] font-semibold tracking-tight leading-none mb-2',
                    featured ? 'text-white' : 'text-cyan-500'
                )}>
                {price.Monthly === price.Annually ? (
                    price.Monthly
                ) : (
                    <>
                        <span
                            aria-hidden={activePeriod === 'Annually'}
                            className={clsx(
                                'transition duration-300',
                                activePeriod === 'Annually' && 'pointer-events-none translate-x-6 select-none opacity-0'
                            )}>
                            {price.Monthly}
                        </span>
                        <span
                            aria-hidden={activePeriod === 'Monthly'}
                            className={clsx(
                                'absolute left-0 top-0 transition duration-300',
                                activePeriod === 'Monthly' && 'pointer-events-none -translate-x-6 select-none opacity-0'
                            )}>
                            {price.Annually}
                        </span>
                    </>
                )}
            </p>
            <p className={clsx('mb-8', featured ? 'text-white' : 'text-[#272E36]')}>{description}</p>
            <span
                className={clsx(
                    'flex items-center gap-x-1.5 text-sm font-semibold mb-16',
                    featured ? 'text-white' : 'text-[#272E36]'
                )}>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3.5 h-3.5">
                    <path
                        className="fill-[#61CE70]"
                        d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                    />
                </svg>
                {discount}
            </span>
            <button
                className={clsx(
                    'btn-gradient',
                    featured ? 'cyan' : 'gray',
                    css`
                        font-size: 14px;
                        line-height: 16px;
                        font-weight: 500;

                        background-color: rgba(0, 0, 0, 0);
                        color: #16a34a;
                        padding: 15px 30px 15px 30px;
                        border-radius: 25px;
                        border: 1px solid #16a34a;
                        transition: border-color 300ms ease-in-out, background 300ms ease-in-out, box-shadow 300ms ease-in-out;

                        &:hover {
                            color: #fff;
                            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.16);
                        }
                    `
                )}
                aria-label={`Get started with the ${name} plan for ${price}`}>
                <div className="btn-gradient-overlay"></div>
                <span className="btn-gradient-text">{button.label}</span>
            </button>
            <span className={clsx('block pt-2', featured ? 'text-white' : 'text-[#272E36]')}>{bill}</span>
        </div>
    );
}

export default function Pricing() {
    let [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>('Monthly');

    return (
        <section id="pricing" aria-labelledby="pricing-title" className="py-24 bg-[#f8faff]">
            <Container className="text-center">
                <div className="mb-28">
                    <h3 className="section-title">Pricing Plans</h3>
                    <h2 className="section-description">Plans that suits you best</h2>
                </div>

                <div className="flex justify-center mb-16">
                    <div className="relative">
                        <RadioGroup value={activePeriod} onChange={setActivePeriod} className="grid grid-cols-2">
                            {['Monthly', 'Annually'].map((period) => (
                                <RadioGroup.Option
                                    key={period}
                                    value={period}
                                    className={clsx(
                                        'cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                                        period === 'Monthly' ? 'rounded-l-lg' : '-ml-px rounded-r-lg'
                                    )}>
                                    {period}
                                </RadioGroup.Option>
                            ))}
                        </RadioGroup>
                        <div
                            aria-hidden="true"
                            className={clsx(
                                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                                activePeriod === 'Monthly'
                                    ? '[clip-path:inset(0_50%_0_0)]'
                                    : '[clip-path:inset(0_0_0_calc(50%-1px))]'
                            )}>
                            {['Monthly', 'Annually'].map((period) => (
                                <div
                                    key={period}
                                    className={clsx(
                                        'py-2 text-center text-sm font-semibold text-white',
                                        period === 'Annually' && '-ml-px'
                                    )}>
                                    {period}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid max-w-2xl grid-cols-1 items-start gap-x-5 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
