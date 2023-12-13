import { Logo } from '@/components/ui/atoms/logo/logo'
import { Menu } from '../menu/menu'
import { useState } from 'react'
import { cn } from '@/utils/class-name'
import { Container } from '@/components/ui/objects/container/container'
import { ArrowDown, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/atoms/button/buttons'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="relative z-50 border-b border-black">
            <Container className="flex h-20 items-center justify-between   py-4">
                <Logo />
                <nav className="flex items-center">
                    <div
                        className={cn('flex flex-col items-center gap-10', {
                            '': !isMenuOpen,
                            'md-max:fixed md-max:right-0 md-max:top-0  md-max:h-screen md-max:w-full md-max:bg-green-600':
                                isMenuOpen,
                        })}
                    >
                        <Menu
                            className={cn(
                                'flex flex-row gap-5 text-center text-xl xl:gap-10 md-max:mt-20 md-max:text-white',
                                {
                                    'md-max:flex-col': isMenuOpen,
                                    'md-max:hidden': !isMenuOpen,
                                },
                            )}
                        />
                        {isMenuOpen && (
                            <Button className="flex items-center gap-3 md:hidden">
                                Start Saving <ArrowDown weight="bold" />
                            </Button>
                        )}
                    </div>
                    <button
                        className="ml-auto hidden md-max:block"
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
                <Button className="hidden items-center gap-3 md:flex">
                    Start Saving <ArrowDown weight="bold" />
                </Button>
            </Container>
        </header>
    )
}
