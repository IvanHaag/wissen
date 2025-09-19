import { cx } from 'class-variance-authority'
import { type ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
  className?: string
}

export const Card = ({
  children,
  className,
}: CardProps) => {
  return (
    <div
      className={cx(
        'pl-4 py-4 my-4 rounded-3xl',
        className
      )}
    >
      {children}
    </div>
  )
}
