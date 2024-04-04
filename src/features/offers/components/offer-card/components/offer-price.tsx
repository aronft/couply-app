import { cn } from '@/utils/class-name'
import { OfferContext } from './offer-card'
import { useContext } from 'react'

interface OfferPriceProps {
    price?: number
    className?: string
}

export const OfferPrice = ({ price, className }: OfferPriceProps) => {
    const { offer } = useContext(OfferContext)
    let priceToShow = offer.price
    if (price !== undefined) {
        priceToShow = price
    }
    return (
        <span
            className={cn(
                'absolute bottom-0 right-0  -mr-1 -mt-3 block rounded-[3px] bg-black px-7 py-4 text-2xl font-bold text-white',
                className,
            )}
        >
            ${priceToShow}
        </span>
    )
}
