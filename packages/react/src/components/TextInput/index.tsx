import { ComponentProps, ElementType } from 'react'
import { TextInputContainer, Input, Prefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  as?: ElementType
}

export function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...rest} />
    </TextInputContainer>
  )
}
