import { Divider, Text, Heading, VStack, chakra } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'
const ContactSection = ({ Hero }) => {
  return (
    <VStack
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      alignItems="flex-start"
      id="contact"
    >
      <Heading pb="0.5">Contact Me</Heading>
      <Divider />
      <Text>
        Reach me on&nbsp;
        <chakra.span
          as="a"
          href="https://www.linkedin.com/in/lucy-e-heath/"
          isExternal
          target="_blank"
          textColor="#0e3849"
          textDecoration="underline"
        >
          LinkedIn
        </chakra.span>{' '}
        &nbsp;or email
      </Text>
      <HashLink Hero={Hero} smooth to="/#lh">
        <Text
          fontWeight="bold"
          px={['0.5em']}
          color="#55595b"
          textDecoration="underline"
        >
          Back to top
        </Text>
      </HashLink>
    </VStack>
  )
}

export default ContactSection
