import { Text, Heading, Divider, Box, chakra } from '@chakra-ui/react'
import ImageSlider from '../common/ImageSlider'
const InterestsSection = () => {
  const slides = [
    { url: 'https://i.imgur.com/MKE7fUA.jpg', title: 'Paragliding' },
    { url: 'https://i.imgur.com/qFK5oEx.jpg', title: 'Speedflying' },
    { url: 'https://i.imgur.com/1fR5Bxp.jpg', title: 'Hiking in the Alps' },
    { url: 'https://i.imgur.com/ChN3y9R.jpg', title: 'Climbing' },
    { url: 'https://i.imgur.com/s0Vwmbz.jpg', title: 'Kitesurfing' },
    { url: 'https://i.imgur.com/Kn5fSdV.jpg', title: 'Mountaineering' },
    { url: 'https://i.imgur.com/s2v2oKg.jpg', title: 'Skiing' },
    { url: 'https://i.imgur.com/bdgdpsT.jpg', title: 'Iceclimbing' },
    { url: 'https://i.imgur.com/SM3rgJ1.jpg', title: 'Diving' },
    { url: 'https://i.imgur.com/UizLd5H.jpg', title: 'Gig Rowing' },
    { url: 'https://i.imgur.com/pdICINh.jpg', title: 'High Mountaineering' },
    { url: 'https://i.imgur.com/9w4bJIR.jpg', title: 'Surfing' }
  ]

  const containerStyles = {
    margin: '0 auto'
  }

  return (
    <Box
      id="interests"
      bgColor="#375b6d"
      px={['1em', '3em', '6em']}
      py={['1em', '5em', '8em']}
      alignItems="flex-start"
    >
      <Heading
        color={'white'}
        pb="0.5em"
        pl={['0px', '30px']}
        textAlign={['center', 'left']}
      >
        My Adventures
      </Heading>
      <Divider />
      <Box
        style={containerStyles}
        width={['340px', '600px']}
        height={['300px', '550px']}
        py="50px"
      >
        <ImageSlider slides={slides} parentWidth={[600]} />
      </Box>
      <Text
        color="white"
        pt={['1em', '4em']}
        px={['1em', '0em']}
        lineHeight={'2em'}
        mx={['5px', '50px']}
        fontSize={['sm', '2xl']}
      >
        <chakra.span fontWeight="bold">&quot;</chakra.span>I enjoy adventure and
        spend most of my spare time outdoor climbing, surfing or kitesurfing
        (level 3 advanced kiteboarder) at home in Cornwall, diving in warmer
        waters (TDI Certified Sidemount Diver) or mountaineering and ski-touring
        in the Alps. I am also a paraglider pilot and my best achievement was to
        traverse the length of the Alps via paraglider, over five days last
        summer. I have also studied ballet (grade 8+ distinction at all levels)
        and hold the Deans Chorister Award.
        <chakra.span fontWeight="bold">&quot;</chakra.span>
      </Text>
    </Box>
  )
}
export default InterestsSection
