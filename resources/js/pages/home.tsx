import About from '@/layouts/about';
import CallToAction from '@/layouts/calltoaction';
import Faqs from '@/layouts/faq';
import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import Hero from '@/layouts/hero';
import Pricing from '@/layouts/pricing';
import PrimaryFeatures from '@/layouts/primaryfeatures';
import SecondaryFeatures from '@/layouts/secondaryfeatures';
import Testimonials from '@/layouts/testimonials';

export default function Home() {
    return (
        <>
            <Header headerTitle={'Home'} />
            <main>
                <Hero />
                <About />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                <Testimonials />
                <Pricing />
                <Faqs />
            </main>
            <Footer />
        </>
    );
}
