import {
  Avatar,
  Heading,
  HStack,
  VStack,
  IconButton,
  chakra,
  Tooltip,
  Divider
} from '@chakra-ui/react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
const Hero = () => {
  return (
    <HStack
      m={[4, 5]}
      justtifyContent={['center']}
      flexDirection={['column', 'row']}
    >
      <Avatar
        name="Lucy Heath"
        src="https://i.imgur.com/gYBC4Cd.jpg"
        height={['10em', '15em', '20em']}
        width={['10em', '15em', '20em']}
        ml={['1em', '3em', '6em']}
        mr={['1em', '2em']}
      ></Avatar>
      <VStack
        alignItems={['center', 'flex-start']}
        flexWrap={['wrap', 'nowrap']}
        ml={['1em', '3em', '6em']}
        mr={['1em', '6em', '6em']}
        pr={['6em']}
      >
        <Heading size={['xl']}> Hi, i&#39;m Lucy Heath</Heading>
        <Divider />
        <Heading pb={'1em'} size="lg">
          Junior Software Engineer with 10 Years Healthcare Expertise and a
          Passion for Adventure Sports!
        </Heading>
        <HStack>
          <Tooltip label="GitHub" fontSize="md">
            <chakra.span mr={'1em'}>
              <IconButton
                colorScheme="grey"
                aria-label="GitHub"
                size="lg"
                variant="outline"
                icon={<AiFillGithub />}
                as="a"
                href="https://github.com/LucyHeath"
                isExternal
                target="_blank"
              />
            </chakra.span>
          </Tooltip>
          <Tooltip label="LinedIn" fontSize="md">
            <chakra.span>
              <IconButton
                colorScheme="grey"
                aria-label="LinkedIn"
                size="lg"
                variant="outline"
                icon={<AiFillLinkedin />}
                as="a"
                href="https://www.linkedin.com/in/lucy-e-heath/"
                isExternal
                target="_blank"
              />
            </chakra.span>
          </Tooltip>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default Hero
