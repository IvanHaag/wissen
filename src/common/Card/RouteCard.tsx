import { cx } from 'class-variance-authority'
import { type ReactNode } from 'react'

interface RouteCardProps {
  children?: ReactNode
  className?: string
}

export const RouteCard = ({
  children,
  className,
}: RouteCardProps) => {
  return (
    <div
      className={cx(
        'bg-white/80 drop-shadow-lg',
        'p-6 py-4 m-4 rounded-3xl w-full',
        className
      )}
    >
      {children}
    </div>
  )
}
