import type { MouseEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'class-variance-authority'
import { cva, cx } from 'class-variance-authority'

const buttonStyles = cva(
  cx(
    'flex items-center justify-start relative',
    'outline-none cursor-pointer rounded-2xl px-2',
    'border border-yellow-500/90 select-none',
    'h-28 bg-white/70',
    'hover:shadow-lg'
  ),
  {
    variants: {
      disabled: {
        true: 'bg-opacity-80 cursor-not-allowed pointer-events-none',
      },
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

export const BigButton = ({
  children,
  className,
  onClick,
  type,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        buttonStyles({
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
