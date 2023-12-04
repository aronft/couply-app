import { Logo } from '@/components/ui/atoms/logo/logo'
import { Menu } from '../menu/menu'
import { useState } from 'react'
import { cn } from '@/utils/class-name'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="flex items-center justify-between border-b border-black py-4">
            <Logo />
            <nav className="flex items-center">
                <Menu
                    className={cn({ flex: isMenuOpen, hidden: !isMenuOpen })}
                />
                <button
                    aria-label="menu button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                    >
                        <path
                            d="M14 18H0.5V15H14V18ZM27.5 10.5H0.5V7.5H27.5V10.5ZM27.5 3H14V0H27.5V3Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    )
}
