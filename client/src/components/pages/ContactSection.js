import {
  Divider,
  Text,
  Heading,
  VStack,
  chakra,
  Tooltip,
  HStack,
  IconButton
} from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
const ContactSection = () => {
  return (
    <VStack
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      alignItems="flex-start"
      id="contact"
    >
      <Heading pl="30px" pb="0.5em" color="#55595b">
        Contact Me
      </Heading>
      <Divider />
      <HStack>
        <Heading pt="2em" size="md" pl="45px" color="#55595b">
          Reach me at&nbsp;
          <Tooltip label="LinkedIn" fontSize="md">
            <chakra.span>
              <IconButton
                mx="10px"
                colorScheme="grey"
                aria-label="LinkedIn"
                size="lg"
                variant="outline"
                icon={<AiFillLinkedin />}
                as="a"
                href="https://www.linkedin.com/in/lucy-e-heath/"
                target="_blank"
              />
            </chakra.span>
          </Tooltip>
          &nbsp;or by{' '}
          <Tooltip label="lucyeheath@outlook.com" fontSize="md">
            <chakra.span>
              <IconButton
                mx="10px"
                colorScheme="grey"
                aria-label="email"
                size="lg"
                variant="outline"
                icon={<AiOutlineMail />}
              />
            </chakra.span>
          </Tooltip>
        </Heading>
      </HStack>

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
