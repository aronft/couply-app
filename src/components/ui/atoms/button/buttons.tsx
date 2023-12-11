import { cn } from '@/utils/class-name'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const buttonVarinats = cva(
    'flex justify-center font-bold rounded-md items-center  border-2 border-black bg-green-300 text-black',
    {
        variants: {
            size: {
                small: 'py-2 px-5 text-lg',
                medium: 'py-3 px-6 text-xl',
            },
            variant: {
                shadow: 'shadow-sm shadow-black',
            },
        },
        defaultVariants: {
            size: 'small',
        },
    },
)

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVarinats> {
    children: React.ReactNode
}

export const Button = ({
    className,
    children,
    size,
    variant,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                buttonVarinats({
                    size,
                    variant,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}
