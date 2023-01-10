import { HStack, Text } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <HStack backgroundColor="#ffffff" px={('1em', '3em', '6em')} py={['1em']}>
      <HashLink smooth to="/#lh">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          LH
        </Text>
      </HashLink>
      <HashLink smooth to="/#projects">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Projects
        </Text>
      </HashLink>
      <HashLink smooth to="/#background">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Background
        </Text>
      </HashLink>
      <HashLink smooth to="/#interests">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Adventure
        </Text>
      </HashLink>
      <HashLink smooth to="/#contact">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Contact
        </Text>
      </HashLink>
    </HStack>
  )
}
export default Navbar
