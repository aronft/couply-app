import { Container } from '@/components/ui/objects/container/container'
import { Eye } from '@phosphor-icons/react'
import { OfferList } from '@/features/offers/components/offer-list/offer-list'
import { Offers } from '@/constants/offers'

export const OffersSection = () => {
    return (
        <section className="ml-[calc((100%-100vw)/2)] mr-[calc((100%-100vw)/2)] bg-white pb-24 ">
            <Container tag="div" className="flex flex-col">
                <OfferList offers={Offers} className="-translate-y-20" />
                <a
                    href=""
                    className="flex items-center justify-center gap-2 text-2xl underline lg:justify-start"
                >
                    <Eye />
                    View all offers
                </a>
            </Container>
        </section>
    )
}
