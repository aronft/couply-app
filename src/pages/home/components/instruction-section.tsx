import { Button } from '@/components/ui/atoms/button/buttons'
import { UiList } from '@/components/ui/objects/ui-list/ui-list'
import { ArrowDown } from '@phosphor-icons/react'

export const InstructionSection = () => {
    return (
        <section className="flex flex-col items-start gap-12 pb-14 ">
            <UiList
                tag="ol"
                className="flex-col  items-start gap-8 text-xl  lg:flex-row xl:flex-col"
            >
                <div className="flex gap-6 lg:flex-col xl:flex-row xl:items-center">
                    <span className="min-w-7 min-h-7 flex h-7 w-7 items-center justify-center rounded-full bg-black text-lg text-white">
                        1
                    </span>
                    <p>Download the Extension for Chrome or Firefox.</p>
                </div>
                <div className="flex gap-6 lg:flex-col xl:flex-row xl:items-center">
                    <span className="min-w-7 min-h-7 flex h-7 w-7 items-center justify-center rounded-full bg-black text-lg text-white">
                        2
                    </span>
                    <p>Visit your favorite online retailers.</p>
                </div>
                <div className="flex gap-6 lg:flex-col xl:flex-row xl:items-center">
                    <span className="min-w-7 min-h-7 flex h-7 w-7 items-center justify-center rounded-full bg-black text-lg text-white">
                        3
                    </span>
                    <p>
                        <strong className="text-green-600">Save!</strong> Apply
                        coupons from the toolbar.
                    </p>
                </div>
            </UiList>
            <Button
                className="w-full bg-green-400 lg:w-auto"
                variant={'shadow'}
            >
                Install Extension <ArrowDown weight="bold" />
            </Button>
        </section>
    )
}
