import { cn } from '@/utils/class-name'
import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<unknown> {
    children: React.ReactNode
    tag?: keyof JSX.IntrinsicElements
}

export const Container = ({
    tag = 'div',
    className,
    children,
    ...props
}: ContainerProps) => {
    const Tag = tag
    return (
        <Tag className={cn('container mx-auto px-5', className)} {...props}>
            {children}
        </Tag>
    )
}
