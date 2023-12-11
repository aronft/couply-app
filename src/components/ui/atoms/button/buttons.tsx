import { cn } from '@/utils/class-name'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                'border border-black px-5 py-2 text-white',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}
