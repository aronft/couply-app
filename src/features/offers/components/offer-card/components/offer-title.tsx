import { useContext } from 'react'
import { OfferContext } from './offer-card'
import { cn } from '@/utils/class-name'

interface OfferContextProps {
    title?: string
    className?: string
}

export const OfferTitle = ({ title, className }: OfferContextProps) => {
    const { offer } = useContext(OfferContext)
    let titleToShow = offer.title
    if (title !== undefined) {
        titleToShow = title
    }

    return (
        <div
            className={cn('flex justify-between bg-white py-4 pl-6', className)}
        >
            <p className="text-2xl font-bold">{titleToShow}</p>
        </div>
    )
}
