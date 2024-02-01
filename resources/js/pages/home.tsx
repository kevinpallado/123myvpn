import About from '@/layouts/about';
import Features from '@/layouts/features';
import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import Hero from '@/layouts/hero';
import Mechanism from '@/layouts/mechanism';
import Pricing from '@/layouts/pricing';
import Servers from '@/layouts/servers';
import Testimonials from '@/layouts/testimonials';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Features />
                <Servers />
                <Pricing />
                <Testimonials />
                <Mechanism />
            </main>
            <Footer />
        </>
    );
}
