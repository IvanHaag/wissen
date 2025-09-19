import { type ReactNode } from 'react'
import { cx } from 'class-variance-authority'

interface CircleContainerProps {
  children?: ReactNode
  className?: string
}

export const CircleContainer = ({ children, className }: CircleContainerProps) => {
  return (
    <div
      className={cx(
        'p-6 py-4  bg-white/20 rounded-full drop-shadow-lg h-28 w-28',
        'border-4 border-white/40',
        className
      )}
    >
      {children}
    </div>
  )
}
