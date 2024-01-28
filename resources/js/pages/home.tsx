import CallToAction from '@/layouts/public/calltoaction'
import Faqs from '@/layouts/public/faq'
import Footer from '@/layouts/public/footer'
import Header from '@/layouts/public/header'
import Hero from '@/layouts/public/hero'
import Pricing from '@/layouts/public/pricing'
import PrimaryFeatures from '@/layouts/public/primaryfeatures'
import SecondaryFeatures from '@/layouts/public/secondaryfeatures'
import Testimonials from '@/layouts/public/testimonials'

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                <Testimonials />
                <Pricing />
                <Faqs />
            </main>
            <Footer />
        </>
    )
}