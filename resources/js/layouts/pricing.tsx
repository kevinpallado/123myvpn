'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { css } from '@emotion/css';
import { useState } from 'react';
import { Minus } from '@/components/ui/minus'
import { usePage } from '@inertiajs/react';


// const plans = [
//     {
//         name: 'Starts from 10 GB',
//         featured: false,
//         initialPrice: { value: 1 },
//         description: null,
//         discount: '',
//         button: {
//             label: 'Subscribe',
//             href: '/subscription'
//         },
//         off: true,
//         initialData: { value: 10 }
//     },
//     {
//         name: 'Starts from 40 GB',
//         featured: false,
//         initialPrice: { value: 4*0.95 },
//         description: null,
//         discount: 5,
//         button: {
//             label: 'Subscribe',
//             href: '/subscription',
//             // onClick: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (window as any).router.get(route('subscription'))
//         },
//         initialData: { value: 40 }
//     },
//     {
//         name: 'Starts from 80 GB',
//         featured: false,
//         initialPrice: { value: 8*0.90 },
//         description: null,
//         discount: 10 ,
//         button: {
//             label: 'Subscribe',
//             href: '/subscription'
//         },
//         initialData: { value: 80 }
//     },
//     {
//         name: 'Starts from 120 GB',
//         featured: false,
//         initialPrice: { value: 12*0.85 },
//         description: null,
//         discount: 15,
//         button: {
//             label: 'Subscribe',
//             href: '/subscription'
//         },
//         initialData: { value: 120 }
//     }
// ];

// function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//     return (
//         <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//             <path
//                 d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
//                 fill="currentColor"
//             />
//             <circle
//                 cx="12"
//                 cy="12"
//                 r="8.25"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     );
// }

function Plan({
    dataPlan
    // name,
    // featured = false,
    // price_initial,
    // description,
    // discount,
    // button,
    // initialData,
    // off = false
}: {
    dataPlan: any
    // name: string;
    // featured: boolean;
    // price_initial: number;
    // description: string;
    // discount: number;
    // button: {
    //     label: string;
    //     href: string;
    // };
    // // initialData: { value: number };
    // off: boolean;
}) {
    const [price, setPrice] = useState(dataPlan.price_initial);
    const [dataGB, setDataGB] = useState(dataPlan.data_min_gb);

    const handleAddData = () => {
        let dataPricing = price
        let dataPlanGB = dataGB
        dataPlanGB += dataPlan.data_step_gb
        if(dataPlanGB > dataPlan.data_max_gb) {
            return
        }
        if(dataPlan.price_percentage_off > 0) {
            var discount = dataPlan.price_per_data * (1-(dataPlan.price_percentage_off / 100));
            dataPricing += discount;
            dataPricing = parseFloat(dataPricing.toFixed(2));
        } else {
            dataPricing += (dataPlan.price_per_data)
        }
        // dataPricing = Math.round(parseFloat(dataPricing) * 100) / 100
        setDataGB(dataPlanGB)
        setPrice(dataPricing)
    }

    const handleMinusData = () => {
        let dataPricing = price
        let dataPlanGB = dataGB
        dataPlanGB -= dataPlan.data_step_gb
        if(dataPlanGB < dataPlan.data_min_gb) {
            return
        }
        if (dataPlan.price_percentage_off > 0) {
            var discount = dataPlan.price_per_data * (1-(dataPlan.price_percentage_off / 100));
            dataPricing -= discount;
            dataPricing = parseFloat(dataPricing.toFixed(2)); // Convert back to number
        }        
        else {
            dataPricing -= (dataPlan.price_per_data)
        }
        // dataPricing = Math.round(parseFloat(dataPricing) * 100) / 100
        setDataGB(dataPlanGB)
        setPrice(dataPricing)
    }
    // const handleIncrement = () => {
    //     if (name === 'Starts from 10 GB') {
    //         setPrice((prevPrice) => {
    //             const incrementedPrice = prevPrice + 1;
    //             const newPrice = incrementedPrice <= 3 ? incrementedPrice : 3;
    //             return parseFloat(newPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const incrementedData = prevData + 10;
    //             const newData = incrementedData <= 30 ? incrementedData : 30;
    //             return newData;
    //         });
    //     }
    //     if (name === 'Starts from 40 GB') {
    //         setPrice((prevPrice) => {
    //             const incrementedPrice = prevPrice + 1*0.95;
    //             const newPrice = incrementedPrice <= 7*0.95 ? incrementedPrice : 7*0.95;
    //             return parseFloat(newPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const incrementedData = prevData + 10;
    //             const newData = incrementedData <= 70 ? incrementedData : 70;
    //             return newData;
    //         });
    //     }
    //     if (name === 'Starts from 80 GB') {
    //         setPrice((prevPrice) => {
    //             const incrementedPrice = prevPrice + 1*0.90;
    //             const newPrice = incrementedPrice <= 11*0.90 ? incrementedPrice : 11*0.90;
    //             return parseFloat(newPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const incrementedData = prevData + 10;
    //             const newData = incrementedData <= 110 ? incrementedData : 110;
    //             return newData;
    //         });
    //     }
    //     if (name === 'Starts from 120 GB') {
    //         setPrice((prevPrice) => {
    //             const incrementedPrice = prevPrice + 1*0.85;
    //             return parseFloat(incrementedPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const incrementedData = prevData + 10;
    //             return incrementedData;
    //         });
    //     }
    //   };

      
    // const handleMinusClick = () => {
    //     if (name === 'Starts from 10 GB') {
    //         setPrice((prevPrice) => {
    //             const decrementedPrice = prevPrice - 1;
    //             const newPrice = decrementedPrice >= 1 ? decrementedPrice : 1;
    //             return newPrice;
    //         });
    //         setData((prevData) => {
    //             const decrementedData = prevData - 10;
    //             const newData = decrementedData >= 10 ? decrementedData : 10;
    //             return newData;
    //         });
    //     }
    //     if (name === 'Starts from 40 GB') {
    //         setPrice((prevPrice) => {
    //             const decrementedPrice = prevPrice - 1*0.95;
    //             const newPrice = decrementedPrice >= 4*0.95 ? decrementedPrice : 4*0.95;
    //             return parseFloat(newPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const decrementedData = prevData - 10;
    //             const newData = decrementedData >= 40 ? decrementedData : 40;
    //             return newData;
    //         });
    //     }
    //     if (name === 'Starts from 80 GB') {
    //         setPrice((prevPrice) => {
    //             const decrementedPrice = prevPrice - 1*0.95;
    //             const newPrice = decrementedPrice >= 8*0.90 ? decrementedPrice : 8*0.90;
    //             return parseFloat(newPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const decrementedData = prevData - 10;
    //             const newData = decrementedData >= 80 ? decrementedData : 80;
    //             return newData;
    //         });
    //     }
    //     if (name === 'Starts from 120 GB') {
    //         setPrice((prevPrice) => {
    //             const decrementedPrice = prevPrice - 1*0.90;
    //             const newPrice = decrementedPrice >= 12*0.90 ? decrementedPrice : 12*0.90;
    //             return parseFloat(newPrice.toFixed(2));
    //         });
    //         setData((prevData) => {
    //             const decrementedData = prevData - 10;
    //             const newData = decrementedData >= 120 ? decrementedData : 120;
    //             return newData;
    //         });
    //     }
    //   };
      
    console.log(dataPlan)
    return (
        <div
            className={clsx(
                'flex flex-col items-center justify-center overflow-hidden rounded-3xl px-8 py-12 shadow-[0_4px_12px_0_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]',
                // featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
                css`
                    transition: box-shadow 0.3s;
                `
            )}>
                {/* , featured ? 'text-white' : 'text-[#272E36]' */}
            <h3 className={clsx('flex items-center text-lg font-semibold mb-6')}>
                {dataPlan.name}
            </h3>
            <div className={clsx('mb-6', dataPlan.price_percentage_off == 0 ? 'order-first text-white lg:order-none' : 'text-red-500' )}>Save {dataPlan.price_percentage_off}%</div>
            <span
                className={clsx(
                    'flex items-center gap-x-1.5 font-bold text-[25px] mb-4',
                    // featured ? 'text-white' : 'text-[#272E36]'
                )}>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3.5 h-3.5">
                    <path
                        className="fill-[#61CE70]"
                        d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                    />
                </svg>
                {dataGB} GB
                <span className='ml-4'>
                    <Minus className="custom-class" onClick={handleAddData}>+</Minus>
                    <div>&nbsp;</div>
                    <Minus className="custom-class" onClick={handleMinusData}>-</Minus>
                </span>
            </span>
            
            <p className='relative flex text-[40px] font-semibold tracking-tight leading-none mb-2 mt-2 text-cyan-500'>${price}</p>
            
            {/* , featured ? 'text-white' : 'text-[#272E36]' */}
            {/* <p className={clsx('mb-8')}>{description}</p> */}
            
            <a href='/subscription'>
                <button
                    className={clsx(
                        'btn-gradient',
                        // featured ? 'cyan' : 'gray',
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
                    // aria-label={`Get started with the ${name} plan for ${price}`}
                    >
                    <div className="btn-gradient-overlay"></div>
                    <span className="btn-gradient-text">Subscribe</span>
                </button>
            </a>
        </div>
    );
}

export default function Pricing() {
    const { activePricing } = usePage<any>().props
    return (
        <section id="pricing" aria-labelledby="pricing-title" className="py-24 bg-[#f8faff]">
            <Container className="text-center">
                <div className="mb-28">
                    <h3 className="section-title">Pricing Plans</h3>
                    <h2 className="section-description">Plans that suits you best</h2>
                </div>

                <div className="grid max-w-2xl grid-cols-1 items-start gap-x-5 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-4">
                    {activePricing.map((plan: number, key: any) => (
                        <Plan key={key} dataPlan={plan} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
