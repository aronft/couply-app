import { HeroSection } from './components/hero-section'
import { Container } from '@/components/ui/objects/container/container'
import { InstructionSection } from './components/instruction-section'

export const Home = () => {
    return (
        <Container tag="main">
            <div className="flex flex-col gap-16 lg:pb-14 lg:pt-20 xl:flex-row xl:items-stretch">
                <HeroSection className="xl:pr-12" />
                <span className="ml-[calc((100%-100vw)/2)] mr-[calc((100%-100vw)/2)] border border-black xl:m-0 xl:-mb-14 xl:-mt-20 xl:mr-0"></span>
                <InstructionSection />
            </div>
        </Container>
    )
}
