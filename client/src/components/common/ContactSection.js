import { Divider, Text, Heading, VStack, chakra } from '@chakra-ui/react'

const ContactSection = () => {
  return (
    <VStack>
      <Heading>Contact Me</Heading>
      <Divider />
      <Text>
        Reach me on
        <chakra.span
          as="a"
          href="https://www.linkedin.com/in/lucy-e-heath/"
          isExternal
          target="_blank"
        >
          LinkedIn
        </chakra.span>{' '}
        or email
      </Text>
    </VStack>
  )
}

export default ContactSection