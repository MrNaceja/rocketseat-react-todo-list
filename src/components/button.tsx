import { cva, type VariantProps } from "class-variance-authority"
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import type { ComponentProps } from "react"

const buttonStyles = cva('rounded-lg text-gray-400 text-body-md-normal flex items-center justify-center gap-2', {
    variants: {
        variant: {
            primary: 'bg-gray-200 hover:bg-pink-light'
        },
        size: {
            md: 'px-4 py-2'
        },
        disabled: {
            false: 'cursor-pointer',
            true: 'opacity-50 cursor-not-allowed'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        disabled: false 
    }
})
const buttonIconStyles = cva('', {
    variants: {
        variant: {
            primary: 'text-pink-base'
        },
        size: {
            md: 'size-5'
        }
    },
    defaultVariants: {
        variant: 'primary' 
    }
})

interface ButtonProps extends ComponentProps<'button'>, Omit<VariantProps<typeof buttonStyles>, 'disabled'> {
    icon?: IconName
}
export const Button = ({ variant, disabled, icon, size, children, className, ...buttonProps }: ButtonProps) => {
    return (
        <button className={buttonStyles({ variant, size, disabled, className })} disabled={disabled} type="button" {...buttonProps}>
            {icon && <DynamicIcon name={icon} className={buttonIconStyles({ variant, size })}/>}
            {children}
        </button>
    )
}