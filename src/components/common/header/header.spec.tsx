import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('the Header component', () => {
    it('should open the menu on click the menu button and close after click it again', async () => {
        render(<Header />)

        const openButton = screen.getByRole('button', { name: 'Open menu' })
        expect(openButton).toBeInTheDocument()

        await userEvent.click(openButton)

        const closeButton = screen.getByRole('button', { name: 'Close menu' })
        expect(closeButton).toBeInTheDocument()
    })
})
