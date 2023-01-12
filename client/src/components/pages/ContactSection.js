import { Divider, Text, Heading, VStack, chakra } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'
const ContactSection = () => {
  return (
    <VStack
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      alignItems="flex-start"
      id="contact"
    >
      <Heading pl="30px" pb="0.5em">
        Contact Me
      </Heading>
      <Divider />
      <Heading pt="2em" size="md" pl="45px">
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
        &nbsp;or by email
      </Heading>
      <HashLink smooth to="/#lh">
        <Text
          fontWeight="bold"
          pl="45px"
          color="#55595b"
          pt="2em"
          textDecoration="underline"
        >
          Back to top
        </Text>
      </HashLink>
    </VStack>
  )
}

export default ContactSection
