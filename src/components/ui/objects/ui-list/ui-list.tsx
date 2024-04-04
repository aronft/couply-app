import { cn } from '@/utils/class-name'
import { VariantProps, cva } from 'class-variance-authority'
import { Children } from 'react'

const uiListVariants = cva('flex', {
    variants: {
        direction: {
            row: 'flex-row',
            column: 'flex-col',
        },
    },
})

export interface UiListProps extends VariantProps<typeof uiListVariants> {
    children?: React.ReactNode
    className?: string
    tag?: 'ul' | 'ol'
}

export const UiList = ({
    children,
    className,
    direction = 'row',
    tag: Tag = 'ul',
}: UiListProps) => {
    return (
        <Tag className={cn(uiListVariants({ direction, className }))}>
            {Children.map(children, (child, index) => {
                return <li key={index}>{child}</li>
            })}
        </Tag>
    )
}
