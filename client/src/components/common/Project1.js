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

import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'

const Project1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Card
      maxHeight={'750px'}
      maxWidth={'600px'}
      mx="3em"
      px="2em"
      py="2em"
      my="2em"
      backgroundColor="#0e3849"
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
          <Text textColor="white">
            {' '}
            Rockpool Detective is based on the classic code-breaking game
            Mastermind. A hidden pattern of four Rockpool Creatures is generated
            at the start of each game and the player must try to guess the
            correct pattern within six attempts. The player is given clues based
            on how close they are to the correct pattern as they go, which helps
            them to inform their next guess.
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
                  <ListItem>
                    The game should be playable for one player with the computer
                    creating the secret code.
                  </ListItem>
                  <ListItem>
                    Once the game has been completed the player should be able
                    to play again.
                  </ListItem>
                </UnorderedList>
                <Heading size="sm" pt={2} pb={3}>
                  Features
                </Heading>
                <Divider />
                <UnorderedList pb={3}>
                  <ListItem>
                    Users must guess which 4 creatures make up the secret code.
                  </ListItem>
                  <ListItem>
                    Users have six opportunities to guess the code.
                  </ListItem>
                  <ListItem>
                    Clues are given after each round to provide hints.
                  </ListItem>
                  <ListItem>
                    Users can restart the game or play again once the game is
                    over.
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
                  href="https://bit.ly/Rockpool-Detective_README"
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
            target="_blank"
          >
            View site
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
export default Project1
