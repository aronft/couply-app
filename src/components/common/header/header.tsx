import { Logo } from '@/components/ui/atoms/logo/logo'
import { Menu } from '../menu/menu'
import { useState } from 'react'
import { cn } from '@/utils/class-name'
import { Container } from '@/components/ui/objects/container/container'
import { X } from '@phosphor-icons/react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="border-b border-black">
            <Container className="flex h-20 items-center justify-between   py-4">
                <Logo />
                <nav className="flex items-center">
                    <div
                        className={cn('', {
                            '': !isMenuOpen,
                            'md-max:fixed md-max:top-0 md-max:h-screen  md-max:w-full md-max:bg-green-600 right-0':
                                isMenuOpen,
                        })}
                    >
                        <Menu
                            className={cn(
                                'md-max:text-white mt-20 gap-5 text-center',
                                {
                                    flex: isMenuOpen,
                                    hidden: !isMenuOpen,
                                },
                            )}
                        />
                    </div>
                    <button
                        className="md-max:block hidden"
                        aria-label="menu button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X
                                className="relative z-10 text-white "
                                size={32}
                            />
                        ) : (
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
                        )}
                    </button>
                </nav>
            </Container>
        </header>
    )
}
