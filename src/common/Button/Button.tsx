import type { MouseEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'class-variance-authority'
import { cva, cx } from 'class-variance-authority'

const buttonStyles = cva(
  cx(
    'flex items-center justify-center relative',
    'outline-none cursor-pointer rounded-lg px-2',
    'text-white border select-none',
    'min-w-28 min-h-10'
  ),
  {
    variants: {
      color: {
        black: 'bg-slate-800 hover:bg-slate-700 border-slate-800',
        white: 'bg-white text-slate-800 border-slate-200',
        success:
          'bg-green-600 hover:bg-green-500 border-green-600 border-opacity-20',
        danger: 'bg-red-600 hover:bg-red-500 border-red-600 border-opacity-20',
        yellow:
          'bg-primary-500 hover:bg-primary-400 border-primary-500 border-opacity-20',
        green: 'bg-green-600 hover:bg-green-700 text-white border-green-600',
        red: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
        'white-orange': 'bg-white hover:bg-orange-50 text-orange-600 border-orange-200',
        orange: 'bg-orange-600 hover:bg-orange-700 text-white border-orange-600',
        gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-transparent',
      },
      disabled: {
        true: 'bg-opacity-80 cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {
      color: 'black',
    },
  }
)

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children?: ReactNode
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button = ({
  children,
  className,
  onClick,
  type,
  disabled = false,
  color,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        buttonStyles({
          color,
          disabled,
          className,
        })
      )}
      type={type}
      onClick={(event) => {
        if (disabled || (!onClick && type !== 'submit')) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        onClick && onClick(event)
      }}
    >
      {children}
    </button>
  )
}
