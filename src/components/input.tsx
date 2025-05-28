import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

const inputStyles = cva('border-b border-gray-200 hover:border-pink-base focus:border-pink-base bg-transparent outline-none text-body-sm-normal caret-pink-base', {
    variants: {
        size: {
            md: 'px-2 pb-2'
        },
        disabled: {
            false: '',
            true: 'cursor-not-allowed pointer-events-none'
        }
    },
    defaultVariants: {
        size: 'md'
    }
})

interface InputProps extends Omit<ComponentProps<'input'>, 'size'>, Omit<VariantProps<typeof inputStyles>, 'disabled'> { }
export const Input = ({ size, className, disabled, ...inputProps }: InputProps) => {
    return (
        <input type="text"
            className={inputStyles({ size, disabled, className })}
            disabled={disabled}
            {...inputProps}
        />
    )
}