import { HStack, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <HStack backgroundColor="#ffffff" px={('1em', '3em', '6em')} py={['1em']}>
      <Text fontWeight="bold" px={['0.5em']} color="#55595b">
        LH
      </Text>
      <Text fontWeight="bold" px={['0.5em']} color="#55595b">
        Projects
      </Text>
      <Text fontWeight="bold" px={['0.5em']} color="#55595b">
        Previous
      </Text>
      <Text fontWeight="bold" px={['0.5em']} color="#55595b">
        Adventure
      </Text>
    </HStack>
  )
}
export default Navbar
