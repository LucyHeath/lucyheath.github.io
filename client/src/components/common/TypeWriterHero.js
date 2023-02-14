import Typewriter from 'typewriter-effect'
import { Box, Heading } from '@chakra-ui/react'
const TypeWriterHero = () => {
  return (
    <Box alignSelf={['center', 'flex-start']}>
      <Heading
        as="h1"
        pl="30px"
        textColor="white"
        size={['md', '2xl']}
        pb="0.5em"
        pt={['1.5em', '0em']}
      >
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
            pauseFor: 500,
            delay: 30
          }}
        />
      </Heading>
    </Box>
  )
}
export default TypeWriterHero
