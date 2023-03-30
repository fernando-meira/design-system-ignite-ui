import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  border: 0,
  borderRadius: '$sm',

  color: '$white',
  fontWeight: '$bold',
  fontFamily: '$default',
  backgroundColor: '$ignite300',

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
