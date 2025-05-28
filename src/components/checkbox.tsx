import { cva, type VariantProps } from "class-variance-authority"
import { Check } from "lucide-react"
import type { ComponentProps } from "react"

const checkboxStyles = cva(`
    relative grid place-items-center border border-green-dark  
    hover:bg-green-dark/20 has-checked:bg-green-base hover:*:checked:bg-green-dark
    text-transparent has-checked:text-white cursor-pointer
`, {
    variants: {
        size: {
            md: 'size-5 rounded-sm *:not-[input]:size-3'
        },
        disabled: {
            false: '',
            true: 'opacity-50 cursor-not-allowed pointer-events-none'
        }
    },
    defaultVariants: {
        size: 'md',
        disabled: false
    }
})

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'size'>, Omit<VariantProps<typeof checkboxStyles>, 'disabled'> { }
export const Checkbox = ({ size, disabled, className, ...inputProps }: CheckboxProps) => {
    return (
        <span className={checkboxStyles({ size, disabled, className })}>
            <input
                type="checkbox"
                className="appearance-none size-full cursor-pointer"
                disabled={disabled}
                {...inputProps}
            />
            <Check className="absolute left-1/2 top-1/2 -translate-1/2 pointer-events-none"/>
        </span>
    )
}