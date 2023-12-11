import { HeroSection } from './components/hero-section'
import { Container } from '@/components/ui/objects/container/container'

export const Home = () => {
    return (
        <Container tag="main">
            <HeroSection />
        </Container>
    )
}
