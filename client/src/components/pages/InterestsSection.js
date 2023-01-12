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
      <Heading pl="30px" pb="0.5em" textColor="white">
        My Adventures
      </Heading>
      <Divider />
      <Text pt="2em" textColor="white" pl="45px">
        Some text and image carousel?
      </Text>
    </VStack>
  )
}
export default InterestsSection
