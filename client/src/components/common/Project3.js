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
  chakra
} from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import { FaSass, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiMongodb } from 'react-icons/si'
const Project3 = () => {
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
            Lay-by aims to provide those in the van-owning community with useful
            insider information about locations for van camping. Users can view
            van spots across a number of countries and are provided with useful
            insights into the locations, facilities and ratings. As a registered
            user of the site you are able to add your own new van camping
            locations and leave reviews and ratings on all spots.
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
                  This was the third project built with a group over 7 days for
                  the General Assembly Software Engineering Immersive Course.
                </Text>
                <Heading size="sm" pt={2} pb={3}>
                  Brief
                </Heading>
                <Divider />
                <UnorderedList pb={3}>
                  <ListItem>Build a full-stack application.</ListItem>
                  <ListItem>
                    Use an Express API to serve your data from a Mongo database.
                  </ListItem>
                  <ListItem>
                    Consume your API with a separate front-end built with React
                  </ListItem>
                  <ListItem>
                    Be a complete product with CRUD functionality.
                  </ListItem>
                  <ListItem>
                    Implement thoughtful user stories/wireframes.
                  </ListItem>
                  <ListItem>
                    Have a visually impressive design and be deployed online.
                  </ListItem>
                </UnorderedList>
                <Heading size="sm" pt={2} pb={3}>
                  Features
                </Heading>
                <Divider />
                <UnorderedList pb={3}>
                  <ListItem>
                    All users can search for locations by name and filter search
                    results by countries.
                  </ListItem>
                  <ListItem>
                    All users can view locations and detailed information about
                    the site, including the average user rating and reviews left
                    by other users.
                  </ListItem>
                  <ListItem>
                    Users can register for an account which allows them to log
                    in Logged in users can create, update and delete locations.
                  </ListItem>
                  <ListItem>
                    Logged in users can write, edit and delete their own reviews
                    of the locations.
                  </ListItem>
                  <ListItem>
                    Logged in users can view their own profile page,which serves
                    as a dashboard for their reviews.
                  </ListItem>
                  <ListItem>
                    They can add a profile picture to personalise the page.
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
                  href="https://bit.ly/lay-by_README"
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
            href="http://bit.ly/lay-by "
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
export default Project3
