import { cn } from '@/utils/class-name'
import { Children } from 'react'

interface UiListProps {
    children?: React.ReactNode
    className?: string
    direction: 'row' | 'column'
}

const directionListClasses: Record<UiListProps['direction'], string> = {
    row: 'flex-row',
    column: 'flex-col',
}

export const UiList = ({
    children,
    className,
    direction = 'row',
}: UiListProps) => {
    return (
        <ul className={cn('flex', className, directionListClasses[direction])}>
            {Children.map(children, (child, index) => {
                return <li key={index}>{child}</li>
            })}
        </ul>
    )
}
