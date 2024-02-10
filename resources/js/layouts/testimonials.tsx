// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '@/components/container';
import { Pagination } from 'swiper/modules';
import TestimonialBg from '@/images/testimonial-bg.png';
import clsx from 'clsx';
import { css } from '@emotion/css';

const slides = [
    {
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Fastest VPN',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
        user: 'Mary Scott',
        date_reviewed: 'Tuesday, August 24, 2019'
    },
    {
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Fastest VPN',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
        user: 'Martins Edinson',
        date_reviewed: 'Tuesday, August 24, 2019'
    },
    {
        image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Fastest VPN',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
        user: 'Mary Scott',
        date_reviewed: 'Tuesday, August 24, 2019'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" aria-labelledby="testimonials-title" className="py-14 lg:py-20">
            <Container
                className={clsx(
                    'text-center',
                    css`
                        background-image: url(${TestimonialBg});
                        background-position: 12% 5%;
                        background-repeat: no-repeat;
                    `
                )}>
                <div className="mb-16 md:20 lg:mb-28">
                    <h3 className="section-title">Testimonials</h3>
                    <h2 className="section-description">What people are saying</h2>
                </div>

                <Swiper
                    autoplay
                    loop
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination]}>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="pb-12">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-[120px] h-[120px] mb-10">
                                    <img src={slide.image} className="absolute inset-0 w-full h-full object-cover rounded-full" />
                                </div>
                                <h2 className="text-2xl font-bold mb-5">{slide.title}</h2>
                                <div className="max-w-[945px] w-full mb-6">
                                    <p className="text-base text-[#272e36] font-normal line-clamp-3">{slide.description}</p>
                                </div>
                                <div>
                                    <h6 className="font-bold uppercase text-cyan-500 mb-1">{slide.user}</h6>
                                    <span className="text-sm font-bold text-[#272E36]">{slide.date_reviewed}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
}
