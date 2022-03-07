import { CTA } from "../components/cta"
import { Feature } from "../components/feature"
import { Footer } from "../components/footer"
import { Hero } from "../components/hero"

export const Home = () => {
    return (
        <div>
            <Hero />
            <Feature />
            <CTA />
            <Footer />
        </div>
    )
}