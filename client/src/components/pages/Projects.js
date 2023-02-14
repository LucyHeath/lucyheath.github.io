import { Heading, Divider, SimpleGrid, Box } from '@chakra-ui/react'
import Project1 from '../common/Project1'
import Project2 from '../common/Project2'
import Project3 from '../common/Project3'
import Project4 from '../common/Project4'

const ProjectCards = () => {
  return (
    <Box
      id="projects"
      px={('0em', '3em', '6em')}
      py={['1em', '5em', '8em']}
      bgColor="#375b6d"
    >
      <Heading
        pl={['0px', '30px']}
        textColor={'white'}
        pb={['0em', '0.5em']}
        textAlign={['center', 'left']}
      >
        My Projects
      </Heading>
      <Divider mb={['1em', '0em']} />
      <SimpleGrid
        columns={{ xs: 12, sm: 12, md: 6, lg: 4 }}
        spacing={6}
        templateColumns={[
          'repeat(auto-fill, minmax(100px, 1fr))',
          'repeat(auto-fill, minmax(650px, 1fr))'
        ]}
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
