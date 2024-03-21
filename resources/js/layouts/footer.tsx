import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';
import Logo from '@/images/logo.svg';
import appStore from '@/images/app-store.png';
import clsx from 'clsx';
import { css } from '@emotion/css';
import playStore from '@/images/play-store.png';
import qrCode from '@/images/qr-code.svg';

const footerLinks = [
    {
        title: 'Site Map',
        items: [
            {
                name: 'Home',
                href: '/'
            },
            {
                name: 'Features',
                href: '/'
            },
            {
                name: 'About',
                href: '/'
            },
            {
                name: 'Support',
                href: '/'
            }
        ]
    },
    {
        title: 'Download',
        items: [
            {
                name: 'VPN for Mac',
                href: '/'
            },
            {
                name: 'VPN for iOS',
                href: '/'
            },
            {
                name: 'VPN for Android',
                href: '/'
            },
            {
                name: 'VPN for Windows',
                href: '/'
            }
        ]
    },
    {
        title: 'Support',
        items: [
            {
                name: 'Live Chat',
                href: '/'
            },
            {
                name: 'FAQs',
                href: '/'
            },
            {
                name: 'VPN Tutorials',
                href: '/'
            },
            {
                name: 'Contact Us',
                href: '/'
            }
        ]
    }
];

const socialLinkTransition = css`
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
`;

const socialLinkClass = clsx(
    `flex items-center justify-center rounded-full h-[48px] w-[48px] bg-gray-800 hover:bg-cyan-500 hover:-translate-y-1 hover:shadow-lg`,
    socialLinkTransition
);

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="pt-16 pb-10 bg-gray-900">
            <Container>
                <div className="text-center font-bold mb-20">
                    <h1 className="text-[40px] text-white mb-6">Get our mobile app</h1>
                    <h3 className="text-lg text-gray-400">Available for both iOS and Android</h3>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-5 mb-20">
                    <a href="/" className="block transition-shadow hover:shadow-xl">
                        <img src={appStore} alt="apple store logo" />
                    </a>
                    <a href="/" className="block transition-shadow hover:shadow-xl">
                        <img src={playStore} alt="android play store logo" />
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 mb-20">
                    {footerLinks.map((item, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-bold text-gray-400 mb-10">{item.title}</h3>
                            <ul className="flex flex-col gap-y-1 list-none font-medium">
                                {item.items.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href} className="text-white hover:text-cyan-500 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-400 mb-10">Follow Us</h3>
                            <div className="flex items-center  gap-x-4">
                                <Link href="/">
                                    <div className={socialLinkClass}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="text-white w-5 h-5">
                                            <path
                                                fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className={socialLinkClass}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="text-white w-5 h-5">
                                            <path
                                                fill="currentColor"
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className={socialLinkClass}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="text-white w-5 h-5">
                                            <path
                                                fill="currentColor"
                                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-400 mb-10">Live Chat</h3>
                            <button
                                className={clsx(
                                    'btn-gradient animation-buzz-out bg-gray-800 font-medium text-white',
                                    css`
                                        width: 190px;
                                        height: 50px;
                                        border-radius: 25px;
                                        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
                                    `
                                )}
                                aria-label="Talk to our 24/7 support">
                                <div className="btn-gradient-overlay"></div>
                                <span className="btn-gradient-text">Talk to a human</span>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="mt-6 text-sm text-gray-500 md:mt-0">
                    &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
