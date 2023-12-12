import { OfferCard, OfferCardProps } from '../components/offer-card'

interface OfferCardContainerProps extends Omit<OfferCardProps, 'children'> {}

export const OfferCardContainer = ({
    offer,
    className,
}: OfferCardContainerProps) => {
    return (
        <OfferCard offer={offer} className={className}>
            <OfferCard.Image />
            <OfferCard.Price />
            <OfferCard.Title />
        </OfferCard>
    )
}
