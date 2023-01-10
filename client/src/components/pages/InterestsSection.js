import { VStack, Text, Heading, Divider } from '@chakra-ui/react'

const InterestsSection = () => {
  return (
    <VStack
      id="interests"
      bgColor="#375b6d"
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      alignItems="flex-start"
    >
      <Heading pb="0.5">My Adventures</Heading>
      <Divider />
      <Text>Some text and image carousel?</Text>
    </VStack>
  )
}
export default InterestsSection
