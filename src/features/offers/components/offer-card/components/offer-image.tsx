import { useContext } from 'react'
import { OfferContext } from './offer-card'

interface OfferImageProps {
    image?: string
    alt?: string
}

export const OfferImage = ({ image, alt }: OfferImageProps) => {
    const { offer } = useContext(OfferContext)
    let imageToShow = offer.image
    let altToShow = offer.title
    if (image !== undefined) {
        imageToShow = image
    }

    if (alt !== undefined) {
        altToShow = alt
    }

    return (
        <img
            className="h-[200px] w-full object-cover"
            src={imageToShow}
            alt={altToShow}
        />
    )
}
