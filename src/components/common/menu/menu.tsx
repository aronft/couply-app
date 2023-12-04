import { UiList } from '@/components/ui/objects/ui-list/ui-list'

export const Menu = ({ className }: { className?: string }) => {
    return (
        <UiList direction="column" className={className}>
            <a href="">Home</a>
            <a href="">Coupuns</a>
            <a href="">FAQ</a>
            <a href="">Contact</a>
        </UiList>
    )
}
