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
                        <Link href="/" className="relative w-20 h-20" aria-label="Home">
                            <img
                                src={Logo}
                                alt={'123myvpn logo'}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

