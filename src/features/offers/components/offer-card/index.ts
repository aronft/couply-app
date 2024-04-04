import { OfferTitle } from '.'
import { OfferPrice } from '.'
import { OfferImage } from '.'
import { OfferCard as OfferCardHOC } from './components/offer-card'

export * from './components/offer-image'
export * from './components/offer-price'
export * from './components/offer-title'

export const ProductCard = Object.assign(OfferCardHOC, {
    Title: OfferTitle,
    Image: OfferImage,
    Price: OfferPrice,
})
