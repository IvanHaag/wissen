import { cx } from 'class-variance-authority'
import { type ReactNode } from 'react'

interface RouteCardProps {
  children?: ReactNode
  className?: string
  fullSize?: boolean
}

export const RouteCard = ({
  children,
  className,
  fullSize = true,
}: RouteCardProps) => {
  return (
    <div
      className={cx(
        'bg-white bg-opacity-70 drop-shadow-lg',
        'p-6 py-4 my-4 rounded-3xl',
        fullSize ? 'w-full mx-4' : 'w-auto',
        className
      )}
    >
      {children}
    </div>
  )
}
