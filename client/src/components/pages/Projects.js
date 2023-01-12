import { Heading, Divider, SimpleGrid, Box } from '@chakra-ui/react'
import Project1 from '../common/Project1'
import Project2 from '../common/Project2'
import Project3 from '../common/Project3'
import Project4 from '../common/Project4'

const ProjectCards = () => {
  return (
    <Box
      id="projects"
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      bgColor="#375b6d"
    >
      <Heading pl="30px" textColor={'white'} pb="0.5em">
        My Projects
      </Heading>
      <Divider />
      <SimpleGrid
        columns={{ xs: 12, sm: 12, md: 6, lg: 4 }}
        pt="2rem"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(650px, 1fr))"
        gap={10}
        justifyItems="center"
        px="40px"
      >
        <Project4 />
        <Project3 />
        <Project2 />
        <Project1 />
      </SimpleGrid>
    </Box>
  )
}

export default ProjectCards
