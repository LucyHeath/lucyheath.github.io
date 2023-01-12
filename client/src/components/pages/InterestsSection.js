import { Text, VStack, Heading, Divider, Box, chakra } from '@chakra-ui/react'
import ImageSlider from '../common/ImageSlider'
const InterestsSection = () => {
  const slides = [
    { url: 'https://i.imgur.com/MKE7fUA.jpg', title: 'Paragliding' },
    { url: 'https://i.imgur.com/qFK5oEx.jpg', title: 'Speedflying' },
    { url: 'https://i.imgur.com/SM3rgJ1.jpg', title: 'Diving' }
  ]

  const containerStyles = {
    width: '500px',
    height: '450px',
    margin: '0 auto'
  }

  return (
    <VStack
      id="interests"
      bgColor="#375b6d"
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      alignItems="flex-start"
    >
      <Heading pl="30px" pb="0.5em" textColor="white">
        My Adventures
      </Heading>
      <Divider />
      <Box style={containerStyles} py="50px">
        <ImageSlider slides={slides} parentWidth={500} />
      </Box>
      <Text color="white" pt="4em" lineHeight={'2em'} mx="50px">
        <chakra.span fontWeight="bold">&quot;</chakra.span>I enjoy adventure and
        spend most of my spare time outdoors climbing, surfing or kitesurfing
        (level 3 advanced kiteboarder) at home in Cornwall, diving in warmer
        waters (TDI Certified Sidemount Diver) or mountaineering and ski-touring
        in the Alps. I am also a paraglider pilot and my best achievement was to
        traverse the length of the Alps via paraglider, over five days last
        summer. I have also studied ballet (grade 8+ distinction at all levels)
        and hold the Deans Chorister Award.
        <chakra.span fontWeight="bold">&quot;</chakra.span>
      </Text>
    </VStack>
  )
}
export default InterestsSection
