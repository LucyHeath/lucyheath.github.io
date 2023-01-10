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
      id="lh"
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      justtifyContent={['center']}
      flexDirection={['column', 'row']}
      bgColor="#375b6d"
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
        <Heading textColor="white" size={['xl']} pb="0.5em">
          {' '}
          Hi, i&#39;m Lucy Heath
        </Heading>
        <Divider />
        <Heading
          textColor="white"
          pb={'1em'}
          size="lg"
          pt="1em"
          lineHeight={'1.5em'}
        >
          Junior Software Engineer with 10 Years Healthcare Expertise and a
          Passion for Adventure Sports!
        </Heading>
        <HStack>
          <Tooltip label="GitHub" fontSize="md">
            <chakra.span>
              <IconButton
                mr={'1em'}
                colorScheme="#ffffff"
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
          <Tooltip label="LinkedIn" fontSize="md">
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
