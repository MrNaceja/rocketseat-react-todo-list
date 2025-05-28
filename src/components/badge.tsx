import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Skeleton, type WithSkeleton } from "./skeleton"

const badgeStyles = cva('inline-grid place-items-center rounded-full text-body-sm-bold', {
    variants: {
        variant: {
            none: '',
            primary: 'bg-green-light text-green-base',
            secondary: 'bg-pink-light text-pink-base'
        },
        size: {
            sm: 'py-0.5 px-2'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'sm'
    }
})

const badgeSkeletonStyles = cva('', {
    variants: {
        size: {
            sm: 'size-5'
        }
    },
    defaultVariants: {
        size: 'sm'
    }
})

interface BadgeProps extends ComponentProps<'span'>, VariantProps<typeof badgeStyles>, WithSkeleton {

}
export const Badge = ({ variant, size, className, loading, children, ...spanProps }: BadgeProps) => {
    return (
        <Skeleton className={cx(badgeStyles({ variant: 'none' }), badgeSkeletonStyles({ size }))} loading={loading} layout={
            <>
                <div>

                </div>
            </>
        }>
            <span className={badgeStyles({ variant, size, className })} {...spanProps}>{children}</span>
        </Skeleton>
    )
}