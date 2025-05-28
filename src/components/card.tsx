import { cx } from "class-variance-authority"
import type { ComponentProps } from "react"

interface CardProps extends ComponentProps<'article'> {}
export const Card = ({ className, children }: CardProps) => {
    return (
        <article className={cx('rounded-lg bg-white size-fit p-3', className)}>
            {children}
        </article>
    )
}