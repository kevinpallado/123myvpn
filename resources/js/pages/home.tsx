import About from '@/layouts/about';
import CallToAction from '@/layouts/calltoaction';
import Faqs from '@/layouts/faq';
import Features from '@/layouts/features';
import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import Hero from '@/layouts/hero';
import Pricing from '@/layouts/pricing';
import Servers from '@/layouts/servers';
import Testimonials from '@/layouts/testimonials';

export default function Home() {
    return (
        <>
            <Header headerTitle={'Home'} />
            <main>
                <Hero />
                <About />
                <Features />
                <Servers />
                <Pricing />
                <CallToAction />
                <Testimonials />
                <Faqs />
            </main>
            <Footer />
        </>
    );
}
