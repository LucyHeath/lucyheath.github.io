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
  Link
} from '@chakra-ui/react'
import React from 'react'
const ProjectCards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')

  return (
    <>
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 4 }}
        pt="2rem"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(550px, 1fr))"
        gap={10}
        justifyItems="center"
        px="40px"
      >

        <Card maxW="md">
          <CardBody>
            <Image
              src="https://i.imgur.com/pfOfxE2.png"
              alt="Champeakx"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Champeakx</Heading>
              <Text>
                {' '}
                A full-stack app that allows people to view information about
                mountaineering routes in Chamonix. Users may create an account
                to post, edit and delete their own reviews and pictures of the
                routes they have completed, which provides useful beta to the
                wider mountaineering community.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Technology icons here...
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={onOpen}>
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
                  <ModalHeader>
                    Champeakx- General Assemby SEI Project 4 - 7 days
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading>Timeframe</Heading>
                    <Text>
                      This was the final project built solo over 7 days for the
                      General Assembly Engineering Immersive Course.
                    </Text>
                    <Heading>Brief</Heading>
                    <Divider />
                    <UnorderedList>
                      <ListItem>
                        Build a full-stack application** by making your own
                        backend and your own front-end.
                      </ListItem>
                      <ListItem>
                        Use a Python Django API** using Django REST Framework to
                        serve your data from a Postgres database.
                      </ListItem>
                      <ListItem>
                        Consume your API with a separate front-end** built with
                        React.
                      </ListItem>
                      <ListItem>
                        Be a complete product** which most likely means multiple
                        relationships and CRUD functionality for at least a
                        couple of models.
                      </ListItem>
                      <ListItem>
                        Implement thoughtful user stories/wireframes that are
                        significant enough to help you know which features are
                        core MVP and which you can cut.
                      </ListItem>
                      <ListItem>
                        Have a visually impressive design** to kick your
                        portfolio up a notch and have something to wow future
                        clients & employers. * **Be deployed online.
                      </ListItem>
                    </UnorderedList>
                    <Heading>Features</Heading>
                    <Divider />
                    <UnorderedList>
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
                        Users must register for an account to be able to leave
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
                      colorScheme="blue"
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
                variant="ghost"
                colorScheme="blue"
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

        <Card maxW="md">
          <CardBody>
            <Image
              src="https://i.imgur.com/pfOfxE2.png"
              alt="Champeakx"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Champeakx</Heading>
              <Text>
                {' '}
                A full-stack app that allows people to view information about
                mountaineering routes in Chamonix. Users may create an account
                to post, edit and delete their own reviews and pictures of the
                routes they have completed, which provides useful beta to the
                wider mountaineering community.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Technology icons here...
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={onOpen}>
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
                  <ModalHeader>
                    Champeakx- General Assemby SEI Project 4 - 7 days
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading>Timeframe</Heading>
                    <Text>
                      This was the final project built solo over 7 days for the
                      General Assembly Engineering Immersive Course.
                    </Text>
                    <Heading>Brief</Heading>
                    <Divider />
                    <UnorderedList>
                      <ListItem>
                        Build a full-stack application** by making your own
                        backend and your own front-end.
                      </ListItem>
                      <ListItem>
                        Use a Python Django API** using Django REST Framework to
                        serve your data from a Postgres database.
                      </ListItem>
                      <ListItem>
                        Consume your API with a separate front-end** built with
                        React.
                      </ListItem>
                      <ListItem>
                        Be a complete product** which most likely means multiple
                        relationships and CRUD functionality for at least a
                        couple of models.
                      </ListItem>
                      <ListItem>
                        Implement thoughtful user stories/wireframes that are
                        significant enough to help you know which features are
                        core MVP and which you can cut.
                      </ListItem>
                      <ListItem>
                        Have a visually impressive design** to kick your
                        portfolio up a notch and have something to wow future
                        clients & employers. * **Be deployed online.
                      </ListItem>
                    </UnorderedList>
                    <Heading>Features</Heading>
                    <Divider />
                    <UnorderedList>
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
                        Users must register for an account to be able to leave
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
                      colorScheme="blue"
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
                variant="ghost"
                colorScheme="blue"
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

        <Card maxW="md">
          <CardBody>
            <Image
              src="https://i.imgur.com/pfOfxE2.png"
              alt="Champeakx"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Champeakx</Heading>
              <Text>
                {' '}
                A full-stack app that allows people to view information about
                mountaineering routes in Chamonix. Users may create an account
                to post, edit and delete their own reviews and pictures of the
                routes they have completed, which provides useful beta to the
                wider mountaineering community.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Technology icons here...
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={onOpen}>
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
                  <ModalHeader>
                    Champeakx- General Assemby SEI Project 4 - 7 days
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading>Timeframe</Heading>
                    <Text>
                      This was the final project built solo over 7 days for the
                      General Assembly Engineering Immersive Course.
                    </Text>
                    <Heading>Brief</Heading>
                    <Divider />
                    <UnorderedList>
                      <ListItem>
                        Build a full-stack application** by making your own
                        backend and your own front-end.
                      </ListItem>
                      <ListItem>
                        Use a Python Django API** using Django REST Framework to
                        serve your data from a Postgres database.
                      </ListItem>
                      <ListItem>
                        Consume your API with a separate front-end** built with
                        React.
                      </ListItem>
                      <ListItem>
                        Be a complete product** which most likely means multiple
                        relationships and CRUD functionality for at least a
                        couple of models.
                      </ListItem>
                      <ListItem>
                        Implement thoughtful user stories/wireframes that are
                        significant enough to help you know which features are
                        core MVP and which you can cut.
                      </ListItem>
                      <ListItem>
                        Have a visually impressive design** to kick your
                        portfolio up a notch and have something to wow future
                        clients & employers. * **Be deployed online.
                      </ListItem>
                    </UnorderedList>
                    <Heading>Features</Heading>
                    <Divider />
                    <UnorderedList>
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
                        Users must register for an account to be able to leave
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
                      colorScheme="blue"
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
                variant="ghost"
                colorScheme="blue"
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

        <Card maxW="md">
          <CardBody>
            <Image
              src="https://i.imgur.com/pfOfxE2.png"
              alt="Champeakx"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Champeakx</Heading>
              <Text>
                {' '}
                A full-stack app that allows people to view information about
                mountaineering routes in Chamonix. Users may create an account
                to post, edit and delete their own reviews and pictures of the
                routes they have completed, which provides useful beta to the
                wider mountaineering community.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Technology icons here...
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={onOpen}>
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
                  <ModalHeader>
                    Champeakx- General Assemby SEI Project 4 - 7 days
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading>Timeframe</Heading>
                    <Text>
                      This was the final project built solo over 7 days for the
                      General Assembly Engineering Immersive Course.
                    </Text>
                    <Heading>Brief</Heading>
                    <Divider />
                    <UnorderedList>
                      <ListItem>
                        Build a full-stack application** by making your own
                        backend and your own front-end.
                      </ListItem>
                      <ListItem>
                        Use a Python Django API** using Django REST Framework to
                        serve your data from a Postgres database.
                      </ListItem>
                      <ListItem>
                        Consume your API with a separate front-end** built with
                        React.
                      </ListItem>
                      <ListItem>
                        Be a complete product** which most likely means multiple
                        relationships and CRUD functionality for at least a
                        couple of models.
                      </ListItem>
                      <ListItem>
                        Implement thoughtful user stories/wireframes that are
                        significant enough to help you know which features are
                        core MVP and which you can cut.
                      </ListItem>
                      <ListItem>
                        Have a visually impressive design** to kick your
                        portfolio up a notch and have something to wow future
                        clients & employers. * **Be deployed online.
                      </ListItem>
                    </UnorderedList>
                    <Heading>Features</Heading>
                    <Divider />
                    <UnorderedList>
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
                        Users must register for an account to be able to leave
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
                      colorScheme="blue"
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
                variant="ghost"
                colorScheme="blue"
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
    </>
  )
}

export default ProjectCards
