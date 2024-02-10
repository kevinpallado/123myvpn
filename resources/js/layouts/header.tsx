'use client';

// inertia
import { Head, Link } from '@inertiajs/react';
import { Popover, Transition } from '@headlessui/react';

// shadcn components
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Fragment } from 'react';
// global components
import Logo from '@/images/logo.svg';
import { NavLink } from '@/components/navlink';
import clsx from 'clsx';
import { css } from '@emotion/css';

interface HeaderProps {
    headerTitle?: string
}

export default function Header({ headerTitle }: HeaderProps) {
    return (
        <header className="flex items-center justify-center min-h-[95px]">
            <Head title={headerTitle} />
            <Container className="w-full">
                <nav className="relative z-50 flex items-center justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="#" className="relative w-20 h-20" aria-label="Home">
                            <img
                                src={Logo}
                                alt={'123myvpn logo'}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:gap-x-4">
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#testimonials">Testimonials</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                        <NavLink href="#faqs">FAQ</NavLink>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <Button
                            className={clsx(
                                'hidden md:block uppercase',
                                css`
                                    width: 160px;
                                    height: 50px;
                                    border-radius: 25px;
                                    background-color: #16a34a;
                                    background-image: linear-gradient(107deg, #16a34a 0%, #107636 100%);
                                    transition: box-shadow 200ms linear;

                                    &:hover {
                                        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.16);
                                    }
                                `
                            )}>
                            Get Started
                        </Button>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Popover.Button as={Link} href={href} className="block w-full p-2">
            {children}
        </Popover.Button>
    );
}

function MobileNavIcon({ open }: { open: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round">
            <path d="M0 1H14M0 7H14M0 13H14" className={clsx('origin-center transition', open && 'scale-90 opacity-0')} />
            <path d="M2 2L12 12M12 2L2 12" className={clsx('origin-center transition', !open && 'scale-90 opacity-0')} />
        </svg>
    );
}

function MobileNavigation() {
    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation">
                {({ open }) => <MobileNavIcon open={open} />}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <Popover.Panel
                        as="div"
                        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
                        <MobileNavLink href="#features">Features</MobileNavLink>
                        <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                        <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                        <hr className="m-2 border-slate-300/40" />
                        <MobileNavLink href="/login">Log in</MobileNavLink>
                        <MobileNavLink href="#">Download the app</MobileNavLink>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    );
}
