import {
  Divider,
  Text,
  Heading,
  Box,
  chakra,
  Tooltip,
  Stack,
  IconButton
} from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
const ContactSection = () => {
  return (
    <Box
      px={['1em', '3em', '6em']}
      py={['1em', '5em', '8em']}
      alignItems="flex-start"
      id="contact"
    >
      <Heading
        pb="0.5em"
        color="#55595b"
        pl={['0px', '30px']}
        textAlign={['center', 'left']}
      >
        Contact Me
      </Heading>
      <Divider />
      <Stack>
        <Text
          textAlign={['center', 'left']}
          size={['sm', 'lg']}
          pt="2em"
          color="#55595b"
          pl={['0px', '45px']}
        >
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
        </Text>
      </Stack>

      <HashLink smooth to="/#lh">
        <Text
          fontWeight="bold"
          pl={['0px', '45px']}
          color="#55595b"
          pt="2em"
          textDecoration="underline"
          fontSize={['sm', 'lg']}
          textAlign={['center', 'left']}
        >
          Back to top
        </Text>
      </HashLink>
    </Box>
  )
}

export default ContactSection
