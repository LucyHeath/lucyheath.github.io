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
import { SiChakraui } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'

import { AiFillHtml5 } from 'react-icons/ai'
import { FaSass, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiMongodb, SiPostgresql } from 'react-icons/si'

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
              height={'330px'}
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
                  <Tooltip label="PostgreSQL" fontSize="md">
                    <chakra.span>
                      <SiPostgresql boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="ChakraUI" fontSize="md">
                    <chakra.span>
                      <SiChakraui boxSize={4} />
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
                    Champeaks - Project 4
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
              src="https://i.imgur.com/hTDkUgF.png"
              alt="Lay-by"
              borderRadius="lg"
              height={'330px'}
              maxWidth={'500px'}
              m="0px"
            />
            <Stack mt="6" spacing="3">
              <Heading textColor="white" size="md">
                Lay-by
              </Heading>
              <Text textColor="white" fontColor="white">
                {' '}
                Lay-by aims to provide those in the van-owning community with
                useful insider information about locations for van camping.
                Users can view van spots across a number of countries and are
                provided with useful insights into the locations, facilities and
                ratings. As a registered user of the site you are able to add
                your own new van camping locations and leave reviews and ratings
                on all spots.
              </Text>
              <Text color="white" fontSize="2xl">
                <HStack alignContent="center">
                  <Tooltip label="React" fontSize="md">
                    <chakra.span>
                      <FaReact boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Sass" fontSize="md">
                    <chakra.span>
                      <FaNodeJs boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="MongoDB" fontSize="md">
                    <chakra.span>
                      <SiMongodb boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="SQL" fontSize="md">
                    <chakra.span>
                      <FaDatabase boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Bootstrap" fontSize="md">
                    <chakra.span>
                      <BsFillBootstrapFill boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Sass" fontSize="md">
                    <chakra.span>
                      <FaSass boxSize={4} />
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
                    Lay-by - Project 3
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text pb={3}>
                      This was the third project built in a group over 7 days
                      for the General Assembly Software Engineering Immersive
                      Course.
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
                      href="https://lay-by.herokuapp.com/"
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
                href="https://bit.ly/lay-by_README"
                isExternal
                target="_blank"
              >
                View site
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

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
              src="https://i.imgur.com/QFKHgQg.png"
              alt="Bored?"
              borderRadius="lg"
              height={'330px'}
              maxWidth={'500px'}
              m="0px"
            />
            <Stack mt="6" spacing="3">
              <Heading textColor="white" size="md">
                Bored?
              </Heading>
              <Text textColor="white" fontColor="white">
                {' '}
                In a world filled with ”doom scrolling”, Bored? is a website
                that seeks to inspire the user with ideas about how they could
                fill their time in meaningful and productive ways!
              </Text>
              <Text color="white" fontSize="2xl">
                <HStack alignContent="center">
                  <Tooltip label="JavaScript" fontSize="md">
                    <chakra.span>
                      <IoLogoJavascript boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Sass" fontSize="md">
                    <chakra.span>
                      <FaSass boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="Bootstrap" fontSize="md">
                    <chakra.span>
                      <BsFillBootstrapFill boxSize={4} />
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
                    Bored? - Project 2
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text pb={3}>
                      This was the second project built solo over 1.5 days for
                      the General Assembly Software Engineering Immersive
                      Course.
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
                      href="https://bit.ly/Bored__README"
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
                href="http://bit.ly/Bored_"
                isExternal
                target="_blank"
              >
                View site
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

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
              src="https://i.imgur.com/LkocSwY.png"
              alt="Rockpool Detective"
              borderRadius="lg"
              height={'330px'}
              maxWidth={'500px'}
              m="0px"
            />
            <Stack mt="6" spacing="3">
              <Heading textColor="white" size="md">
                Rockpool Detective
              </Heading>
              <Text textColor="white" fontColor="white">
                {' '}
                Rockpool Detective is based on the classic code-breaking game
                Mastermind. A hidden pattern of four Rockpool Creatures is
                generated at the start of each game and the player must try to
                guess the correct pattern within six attempts. The player is
                given clues based on how close they are to the correct pattern
                as they go, which helps them to inform their next guess.
              </Text>
              <Text color="white" fontSize="2xl">
                <HStack alignContent="center">
                  <Tooltip label="CSS3" fontSize="md">
                    <chakra.span>
                      <IoLogoCss3 boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="HTML5" fontSize="md">
                    <chakra.span>
                      <AiFillHtml5 boxSize={4} />
                    </chakra.span>
                  </Tooltip>
                  <Tooltip label="JavaScript" fontSize="md">
                    <chakra.span>
                      <IoLogoJavascript boxSize={4} />
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
                    Rockpool Detective - Project 1
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text pb={3}>
                      This was the first project built solo over 7 days for the
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
                      href="https://github.com/LucyHeath/Rockpool-Detective/blob/main/README.md"
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
                href="https://bit.ly/Rockpool-Detective"
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
