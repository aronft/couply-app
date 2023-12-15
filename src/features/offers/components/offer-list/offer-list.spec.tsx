import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { OfferList } from './offer-list'
import { Offer } from '../../models/offec.model'

const offers: Offer = {
    id: '1',
    image: '',
    price: 70,
    title: 'Offer 1',
}

describe('the OfferList component', () => {
    it('should render all the links with the providen title of each item', () => {
        render(<OfferList offers={[offers]} />)

        const link = screen.getAllByRole('link', { name: offers.title })

        expect(link).toBeInTheDocument()
    })
})
