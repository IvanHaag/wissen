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
      className={`p-6 py-4 my-4 bg-white rounded-3xl bg-opacity-70 drop-shadow-lg ${
        fullSize ? 'w-full h-full mx-4' : 'w-auto'
      } ${className || ''}`}
    >
      {children}
    </div>
  )
}
