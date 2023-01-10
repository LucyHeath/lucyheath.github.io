import {
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Stack,
  Card,
  Image,
  Button,
  CardBody,
  CardFooter,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  UnorderedList,
  ListItem,
  HStack,
  Tooltip,
  chakra,
  Box
} from '@chakra-ui/react'
import { FaReact, FaPython } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
const ProjectCards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      id="projects"
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
      bgColor="#375b6d"
    >
      <Heading textColor={'white'} pb="0.5em">
        My Projects
      </Heading>
      <Divider />
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 4 }}
        pt="2rem"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(550px, 1fr))"
        gap={10}
        justifyItems="center"
        px="40px"
      >
        <Card
          maxHeight={'750px'}
          maxWidth={'600px'}
          mx="3em"
          my="4em"
          px="2em"
          py="2em"
          backgroundColor="#0e3849"
          // maxW="md"
        >
          <CardBody>
            <Image
              src="https://i.imgur.com/pfOfxE2.png"
              alt="Champeakx"
              borderRadius="lg"
              maxHeight={'550px'}
              maxWidth={'500px'}
              m="0px"
            />
            <Stack mt="6" spacing="3">
              <Heading textColor="white" size="md">
                Champeakx
              </Heading>
              <Text textColor="white" fontColor="white">
                {' '}
                A full-stack app that allows people to view information about
                mountaineering routes in Chamonix. Users may create an account
                to post, edit and delete their own reviews and pictures of the
                routes they have completed, which provides useful beta to the
                wider mountaineering community.
              </Text>
              <Text color="white" fontSize="2xl">
                <HStack alignContent="center">
                  <Tooltip label="React" fontSize="md">
                    <chakra.span>
                      <FaReact boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Python" fontSize="md">
                    <chakra.span>
                      <FaPython boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Django" fontSize="md">
                    <chakra.span>
                      <DiDjango boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                </HStack>
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" color="#0e3849" onClick={onOpen}>
                Read more
              </Button>
              <Modal
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                scrollBehavior="inside"
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader size="lg" fontWeight="bold">
                    Champeakx - Project 4
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text pb={3}>
                      This was the final project built solo over 7 days for the
                      General Assembly Software Engineering Immersive Course.
                    </Text>
                    <Heading size="sm" pt={2} pb={3}>
                      Brief
                    </Heading>
                    <Divider />
                    <UnorderedList pb={3}>
                      <ListItem>Build a full-stack application.</ListItem>
                      <ListItem>
                        Use a Python Django API using Django REST Framework to
                        serve your data from a Postgres database.
                      </ListItem>
                      <ListItem>
                        Consume your API with a separate Reac front-end.
                      </ListItem>
                      <ListItem>
                        Be a complete product with CRUD functionality.
                      </ListItem>
                      <ListItem>
                        Implement thoughtful user stories/wireframes.
                      </ListItem>
                      <ListItem>
                        Have a visually impressive design and be deployed
                        online.
                      </ListItem>
                    </UnorderedList>
                    <Heading size="sm" pt={2} pb={3}>
                      Features
                    </Heading>
                    <Divider />
                    <UnorderedList pb={3}>
                      <ListItem>
                        All users can browse the mountaineering routes index and
                        refine choices with the difficulty filter, or search by
                        route or peak name if they know what they are looking
                        for.
                      </ListItem>
                      <ListItem>
                        All users can select an individual mountaineering route
                        and click through to find out further information about,
                        and view comments left by others.
                      </ListItem>
                      <ListItem>
                        Users can register for an account to be able to leave
                        their own comments, upload four photos and ratings.
                      </ListItem>
                      <ListItem>
                        Users can edit and delete their own comments
                      </ListItem>
                    </UnorderedList>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    <Button
                      variant="ghost"
                      colorScheme="#0e3849"
                      textDecor="underline"
                      as="a"
                      href="https://bit.ly/Champeakx_README"
                      isExternal
                      target="_blank"
                    >
                      Full README
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                textDecoration="underline"
                textColor="white"
                variant="ghost"
                as="a"
                href="http://bit.ly/Champeakx"
                isExternal
                target="_blank"
              >
                View site
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  )
}

export default ProjectCards
