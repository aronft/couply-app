import { OfferImage } from './offer-image'
import { cn } from '@/utils/class-name'
import { OfferPrice } from './offer-price'
import { OfferTitle } from './offer-title'
import { Offer } from '../../../models/offec.model'
import { createContext } from 'react'

export interface OfferCardProps {
    offer: Offer
    children: React.ReactNode
    className?: string
}

interface OfferContextProps {
    offer: Offer
}
export const OfferContext = createContext<OfferContextProps>(
    {} as OfferContextProps,
)

export const OfferCard = ({ children, className, offer }: OfferCardProps) => {
    return (
        <OfferContext.Provider value={{ offer }}>
            <div
                className={cn(
                    'relative  flex flex-col rounded border-2 shadow-sm shadow-black',
                    className,
                )}
            >
                {children}
            </div>
        </OfferContext.Provider>
    )
}

OfferCard.Image = OfferImage
OfferCard.Price = OfferPrice
OfferCard.Title = OfferTitle
