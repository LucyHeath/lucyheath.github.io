import { HStack, Text } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
    <HStack
      justifyContent={['space-around', 'flex-start']}
      position={[!'fixed', 'fixed']}
      zIndex="200"
      w="100%"
      backgroundColor="#ffffff"
      px={['1em', '3em', '6em']}
      py={['1em']}
    >
      <HashLink smooth to="/#lh">
        <Text
          fontSize={['sm', 'md', 'xl']}
          fontWeight="bold"
          px={['0px', '20px']}
          color="#55595b"
        >
          LH
        </Text>
      </HashLink>
      <HashLink smooth to="/#projects">
        <Text
          fontSize={['sm', 'md', 'xl']}
          fontWeight="bold"
          px={['0px', '20px']}
          color="#55595b"
        >
          Projects
        </Text>
      </HashLink>
      <HashLink smooth to="/#background">
        <Text
          fontSize={['sm', 'md', 'xl']}
          fontWeight="bold"
          px={['0px', '20px']}
          color="#55595b"
        >
          Background
        </Text>
      </HashLink>
      <HashLink smooth to="/#interests">
        <Text
          fontSize={['sm', 'md', 'xl']}
          fontWeight="bold"
          px={['0px', '20px']}
          color="#55595b"
        >
          Adventure
        </Text>
      </HashLink>
      <HashLink smooth to="/#contact">
        <Text
          fontSize={['sm', 'md', 'xl']}
          fontWeight="bold"
          px={['0px', '20px']}
          color="#55595b"
        >
          Contact
        </Text>
      </HashLink>
    </HStack>
  )
}
export default Navbar
