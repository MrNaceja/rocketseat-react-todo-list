import { cx } from "class-variance-authority"
import type { ComponentProps, PropsWithChildren } from "react"

export interface WithSkeleton {
    loading?: boolean
}
interface SkeletonProps extends PropsWithChildren, WithSkeleton, ComponentProps<'div'> {
    layout: React.ReactNode
}
export const Skeleton = ({ loading, className, layout, children }: SkeletonProps) => {
    return (
        !loading
            ? children
            : (
                <div className={cx("skeleton", className)}>
                    {layout}
                </div>
            )
    )
}