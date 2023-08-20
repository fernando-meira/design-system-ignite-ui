import { ComponentProps } from 'react'

import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  width: '100%',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  color: '$white',
  fontSize: '$sm',
  resize: 'vertical',
  fontFamily: '$default',
  fontWeight: '$regular',
  backgroundColor: '$gray900',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>
