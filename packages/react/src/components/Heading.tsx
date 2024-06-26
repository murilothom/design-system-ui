import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { ElementType } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2lg': { fontSize: '$5xl' },
      '3lg': { fontSize: '$6xl' },
      '4lg': { fontSize: '$7xl' },
      '5lg': { fontSize: '$8xl' },
      '6lg': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
