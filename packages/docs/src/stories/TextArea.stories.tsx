import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Observation</Text>

          <Story />
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
