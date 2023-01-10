import { HStack, Text } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'

const Navbar = (
  ContactSection,
  Hero,
  Projects,
  CareerEducation,
  InterestsSection
) => {
  return (
    <HStack backgroundColor="#ffffff" px={('1em', '3em', '6em')} py={['1em']}>
      <HashLink Hero={Hero} smooth to="/#lh">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          LH
        </Text>
      </HashLink>
      <HashLink Projects={Projects} smooth to="/#projects">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Projects
        </Text>
      </HashLink>
      <HashLink CareerEducation={CareerEducation} smooth to="/#background">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Background
        </Text>
      </HashLink>
      <HashLink CareerEducation={CareerEducation} smooth to="/#interests">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Adventure
        </Text>
      </HashLink>
      <HashLink InterestsSection={InterestsSection} smooth to="/#contact">
        <Text fontWeight="bold" px={['0.5em']} color="#55595b">
          Contact
        </Text>
      </HashLink>
    </HStack>
  )
}
export default Navbar
