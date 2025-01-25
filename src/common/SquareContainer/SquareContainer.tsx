import { type ReactNode } from 'react'
import { cx } from 'class-variance-authority'

interface RouteCardProps {
  children?: ReactNode
  className?: string
}

export const SquareContainer = ({ children, className }: RouteCardProps) => {
  return (
    <div
      className={cx(
        'p-6 py-4  bg-primary-500 rounded-3xl bg-opacity-70 drop-shadow-lg h-28 w-28',
        className
      )}
    >
      {children}
    </div>
  )
}
