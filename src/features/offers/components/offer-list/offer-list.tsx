import { UiList } from '@/components/ui/objects/ui-list/ui-list'
import { Offer } from '../../models/offec.model'
import { OfferCardContainer } from '../offer-card/containers/offer-card-container'
import { cn } from '@/utils/class-name'

interface OfferListProps {
    offers: Offer[]
    className?: string
}
export const OfferList = ({ offers, className }: OfferListProps) => {
    return (
        <ul
            className={cn(
                'grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[2fr_170px_1.5fr_2fr] xl:gap-8',
                className,
            )}
        >
            {offers.map((offer, index) => (
                <li
                    key={offer.id}
                    className={cn({
                        'xl:col-span-2': index === 0 || index % 4 === 0,
                    })}
                >
                    <OfferCardContainer
                        offer={offer}
                        className={cn(
                            'lg:flex-col-reverse xl:flex-col-reverse',
                            {
                                'xl:flex-col': index === 0 || index % 4 === 0,
                            },
                        )}
                    />
                </li>
            ))}
        </ul>
    )
}
