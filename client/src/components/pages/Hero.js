import {
  Avatar,
  HStack,
  VStack,
  IconButton,
  chakra,
  Tooltip,
  Divider
} from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import TypeWriterHero from '../common/TypeWriterHero'
const Hero = () => {
  return (
    <HStack
      id="lh"
      py={['3em', '5em', '8em']}
      justifyContent="center"
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
        pr={['0em', '6em']}
      >
        <TypeWriterHero />
        <VStack alignItems={['center', 'flex-start']} w="800px ">
          <Divider />
          <HStack pt="1em" pl="1em">
            <Tooltip label="GitHub" fontSize="md">
              <chakra.span>
                <IconButton
                  mr={'1em'}
                  color="white"
                  aria-label="GitHub"
                  size="lg"
                  variant="outline"
                  icon={<AiFillGithub />}
                  as="a"
                  href="https://github.com/LucyHeath"
                  target="_blank"
                />
              </chakra.span>
            </Tooltip>
            <Tooltip label="LinkedIn" fontSize="md">
              <chakra.span>
                <IconButton
                  color="white"
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
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  )
}

export default Hero
