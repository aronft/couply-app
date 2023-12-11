import { cn } from '@/utils/class-name'

import { cva, VariantProps } from 'class-variance-authority'

const avatarVariants = cva('rounded-full', {
    variants: {
        variant: {
            simple: 'h-12 w-12',
            border: 'h-12 w-12 border-[5px] border-white box-content',
        },
    },
})

interface AvatarProps extends VariantProps<typeof avatarVariants> {
    src: string
    alt: string
    className?: string
}

export const Avatar = ({
    src,
    alt,
    className,
    variant = 'simple',
}: AvatarProps) => {
    return (
        <div className={cn(avatarVariants({ variant, className }))}>
            <img
                src={src}
                alt={alt}
                className="h-full w-full rounded-full object-cover"
            />
        </div>
    )
}
