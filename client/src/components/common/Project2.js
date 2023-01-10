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
  Modal
} from '@chakra-ui/react'

import { FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BsFillBootstrapFill } from 'react-icons/bs'

const Project2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Card
      maxHeight={'750px'}
      maxWidth={'600px'}
      mx="3em"
      my="4em"
      px="2em"
      py="2em"
      backgroundColor="#0e3849"
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
            In a world filled with ”doom scrolling”, Bored? is a website that
            seeks to inspire the user with ideas about how they could fill their
            time in meaningful and productive ways!
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
                  This was the second project built with a group over 1.5 days
                  for the General Assembly Software Engineering Immersive
                  Course.
                </Text>
                <Heading size="sm" pt={2} pb={3}>
                  Brief
                </Heading>
                <Divider />
                <UnorderedList pb={3}>
                  <ListItem>Consume a public API.</ListItem>
                  <ListItem>Have several components.</ListItem>
                  <ListItem>
                    The app can have a router with several &quot;pages&quot;.
                  </ListItem>
                  <ListItem>
                    Include wireframes that you designed before building the
                    app.
                  </ListItem>
                  <ListItem>
                    Be deployed online and accessible to the public.
                  </ListItem>
                </UnorderedList>
                <Heading size="sm" pt={2} pb={3}>
                  Features
                </Heading>
                <Divider />
                <UnorderedList pb={3}>
                  <ListItem>
                    A homepage that is simple, and centred on a striking Gif
                    which sets the scene for the user.
                  </ListItem>
                  <ListItem>
                    A navbar that redirects the user to the homepage and
                    activity page from anywhere on the site.
                  </ListItem>
                  <ListItem>
                    An activity menu which seeks to inspire the user about how
                    they can fill their time using strong visuals.
                  </ListItem>
                  <ListItem>
                    {' '}
                    The “Surprise Me!” button to generate a random activity of
                    any category.
                  </ListItem>
                  <ListItem>
                    A single activity page which displays the randomly generated
                    activity suggestion.
                  </ListItem>
                  <ListItem>
                    Further random suggestions within the category can be
                    obtained using the “Try again” button.
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
  )
}
export default Project2
