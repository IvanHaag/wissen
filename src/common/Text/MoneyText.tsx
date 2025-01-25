import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { NumericFormat } from 'react-number-format'

const textStyles = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    color: {
      black: 'text-slate-800',
      white: 'text-white',
      primary: 'text-primary-500',
      secondary: 'text-slate-400',
      danger: 'text-red-600',
      success: 'text-green-600',
      gray: 'text-gray-400',
      yellow: 'text-yellow-500',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'black',
    weight: 'normal',
  },
})

interface TextProps extends VariantProps<typeof textStyles> {
  children?: ReactNode
  className?: string
}

export const MoneyText = ({
  children,
  size,
  weight,
  color,
  className,
  ...rest
}: TextProps) => {
  return (
    <NumericFormat
      displayType="text"
      decimalSeparator=","
      thousandSeparator="."
      value={typeof children === 'string' ? children : String(children)}
    />
  )
}
