import {
  Avatar,
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Divider,
  IconButton,
  chakra
} from '@chakra-ui/react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import ProjectCards from '../common/ProjectCards'
import InfoTabs from '../common/InfoTabs'
import InterestsAccordian from '../common/InterestsAccordian'

const HomePage = () => {
  return (
    <Box>
      <HStack>
        <Box>LH</Box>
        <Box>Projects</Box>
        <Box>Contacts</Box>
      </HStack>
      <HStack>
        <Avatar
          size="2xl"
          name="Lucy Heath"
          src="https://i.imgur.com/fP6LiTF.jpg"
        ></Avatar>
        <VStack>
          <Heading> Hi, i&#39;m Lucy Heath</Heading>
          <Heading>
            Junior Software Engineer with 10 Years Healthcare Expertise and a
            Passion for Adventure Sports!
          </Heading>
          <HStack>
            <IconButton
              colorScheme="teal"
              aria-label="GitHub"
              size="lg"
              variant="outline"
              icon={<AiFillGithub />}
              as="a"
              href="https://github.com/LucyHeath"
              isExternal
              target="_blank"
            />
            <IconButton
              colorScheme="teal"
              aria-label="LinkedIn"
              size="lg"
              variant="outline"
              icon={<AiFillLinkedin />}
              as="a"
              href="https://www.linkedin.com/in/lucy-e-heath/"
              isExternal
              target="_blank"
            />
          </HStack>
        </VStack>
      </HStack>
      <InfoTabs />
      <Divider />

      <Heading>Projects</Heading>
      <ProjectCards />
      <Divider />
      <InterestsAccordian />
      <Heading>My Adventures</Heading>
      <Text>Some text and image carousel?</Text>
      <VStack>
        <Heading>Contact</Heading>
        <Text>
          Reach me on
          <chakra.span
            as="a"
            href="https://www.linkedin.com/in/lucy-e-heath/"
            isExternal
            target="_blank"
          >
            LinkedIn
          </chakra.span>{' '}
          or email
        </Text>
      </VStack>
    </Box>
  )
}

export default HomePage
