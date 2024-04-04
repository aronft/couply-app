import { UiList, UiListProps } from '@/components/ui/objects/ui-list/ui-list'

interface MenuProps {
    direction?: UiListProps['direction']
    className?: string
}

export const Menu = ({ className, direction = 'column' }: MenuProps) => {
    return (
        <UiList direction={direction} className={className}>
            <a href="">Home</a>
            <a href="">Coupuns</a>
            <a href="">FAQ</a>
            <a href="">Contact</a>
        </UiList>
    )
}
