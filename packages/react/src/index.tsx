import { styled } from './styles'

const Button = styled('button', {
  height: '$10',
  borderRadius: '$md ',
  fontFamily: '$default',
  backgroundColor: '$ignite500',
})

export function App() {
  return <Button>Hello World</Button>
}
