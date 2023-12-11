import { UiList } from '@/components/ui/objects/ui-list/ui-list'

import amazon from '@/assets/sponsors/amazon.svg'
import bestbuy from '@/assets/sponsors/best-buy.svg'
import shopify from '@/assets/sponsors/shopify.svg'
import walmart from '@/assets/sponsors/walmart.svg'

import { cn } from '@/utils/class-name'
import { Container } from '@/components/ui/objects/container/container'
import { Eye } from '@phosphor-icons/react'

export const Sponsors = ({ className }: { className?: string }) => {
    return (
        <article
            className={cn(
                'ml-[calc((100%-100vw)/2)] mr-[calc((100%-100vw)/2)] bg-black',
                className,
            )}
        >
            <Container
                tag="div"
                className="flex justify-between gap-32 pb-40 pt-14"
            >
                <UiList className="grid flex-1  grid-cols-2 items-center gap-11 lg:grid-cols-4">
                    <img
                        className="mx-auto w-20"
                        src={amazon}
                        alt="amazon logo"
                    />
                    <img
                        className="mx-auto w-16"
                        src={bestbuy}
                        alt="best buy logo"
                    />
                    <img
                        className="mx-auto w-28"
                        src={shopify}
                        alt="shopify logo"
                    />
                    <img
                        className="mx-auto w-28"
                        src={walmart}
                        alt="walmart logo"
                    />
                </UiList>
                <a
                    href="#"
                    className="hidden items-center gap-2 text-xl text-white underline xl:flex"
                >
                    <Eye />
                    View all brands
                </a>
            </Container>
        </article>
    )
}
