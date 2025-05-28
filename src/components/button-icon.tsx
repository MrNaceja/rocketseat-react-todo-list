import { cva, type VariantProps } from "class-variance-authority"
import { DynamicIcon, type IconName } from "lucide-react/dynamic"
import type { ComponentProps } from "react"

const buttonStyles = cva('grid place-items-center transition', {
    variants: {
        variant: {
            primary: 'bg-green-base hover:bg-green-dark text-white',
            secondary: 'bg-pink-light hover:bg-pink-base text-pink-base hover:text-white',
            tertiary: 'bg-transparent hover:bg-gray-200 text-gray-300 hover:text-gray-400',
        },
        size: {
            sm: 'rounded size-6 p-1 *:size-4'
        },
        disabled: {
            false: 'cursor-pointer',
            true: 'opacity-50 cursor-not-allowed'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'sm',
        disabled: false
    }
})

interface ButtonIconProps extends ComponentProps<'button'>, Omit<VariantProps<typeof buttonStyles>, 'disabled'> {
    icon: IconName
}
export const ButtonIcon = ({ variant, size, className, icon, disabled, ...buttonProps }: ButtonIconProps) => {
    return (
        <button className={buttonStyles({ variant, size, className, disabled })} disabled={disabled} {...buttonProps}>
            <DynamicIcon name={icon}/>
        </button>
    )
}