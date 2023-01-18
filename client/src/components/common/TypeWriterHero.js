import Typewriter from 'typewriter-effect'
import { Box, Heading } from '@chakra-ui/react'
const TypeWriterHero = () => {
  return (
    <Box>
      <Heading pl="30px" textColor="white" size={['xl']} pb="0.5em">
        <Typewriter
          options={{
            strings: [
              'Hello, my name is Lucy Heath',
              'Junior Software Developer',
              '10 Years Expertise in Healthcare',
              'Adventure Sports Enthusiast'
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1000
          }}
        />
      </Heading>
    </Box>
  )
}
export default TypeWriterHero
