import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
  HStack,
  Image,
  Tooltip,
  Text
} from '@chakra-ui/react'

const CareerEducation = () => {
  return (
    <Box
      id="background"
      backgroundColour="white"
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
    >
      <Divider />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading pt="1em" pb="0.5em" color="#55595b" fontWeight="bold">
                  My Healthcare Career
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pt="2em" pb={4}>
            <HStack mt="1em">
              <Tooltip
                label="Cornwall Partnership Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/8h8qMBY.jpg"
                  boxSize={['1em', '3em', '8em']}
                  alt="Cornwall Partnership Foundation Trust"
                />
              </Tooltip>
              <Heading size="lg" pb="0.5em" pt="2em" color="#55595b">
                Clinical Specialist Respiratory Physiotherapist
              </Heading>
              <Text>(2021- 09/2022)</Text>
            </HStack>
            <Divider />
            <UnorderedList
              pt={'2em'}
              lineHeight={'2em'}
              mx="150px"
              pb={2}
              color="#55595b"
            >
              <ListItem>
                Collaborated with stakeholders, designed and implemented a new
                long COVID health service.
              </ListItem>
            </UnorderedList>
            <HStack mt="1em">
              <Tooltip
                label="Cornwall Partnership Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/8h8qMBY.jpg"
                  boxSize={['1em', '3em', '8em']}
                  alt="Cornwall Partnership Foundation Trust"
                />
              </Tooltip>
              <Heading size="lg" pb="0.5em" pt="2em" color="#55595b">
                Clinical Lead Specialist Respiratory Physiotherapist & Manager,
                Community Respiratory Service
              </Heading>
              <Text>(2019- 2021)</Text>
            </HStack>
            <Divider />
            <UnorderedList
              pt={'2em'}
              lineHeight={'2em'}
              pb={2}
              color="#55595b"
              mx="150px"
            >
              <ListItem>
                Designed and implemented a new community respiratory service in
                West Cornwall.{' '}
              </ListItem>
              <ListItem>
                Managed a diverse team of healthcare professionals and admin
                staff, including clinical supervision, HR and recruitment.
              </ListItem>
              <ListItem>
                Developed policies and standard operating procedures for all
                aspects of the service.
              </ListItem>
              <ListItem>
                Reported on service outcomes/ data to prove effectiveness.
              </ListItem>
              <ListItem>Participated in a national audit.</ListItem>
              <ListItem>
                Worked with stakeholders in commissioning and NHS health and
                social care management.{' '}
              </ListItem>
              <ListItem>
                Advisory and triage role in the COVID community coordination
                center.
              </ListItem>
            </UnorderedList>
            <HStack mt="1em">
              <Tooltip
                label="The Royal Cornwall Hospital, Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/Oulz4QG.jpg"
                  alt="The Royal Cornwall Hospital, Foundation Trust"
                  boxSize={['1em', '3em', '6em']}
                />
              </Tooltip>
              <Heading pl="2em" size="lg" pb="0.5em" pt="2em" color="#55595b">
                Senior Specialist Physiotherapist in Community Stroke
                Rehabilitation
              </Heading>
              <Text>(2019-2020)</Text>
            </HStack>
            <Divider />
            <HStack mt="1em">
              <Tooltip
                label="The Royal Cornwall Hospital, Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/Oulz4QG.jpg"
                  boxSize={['1em', '3em', '6em']}
                  alt="The Royal Cornwall Hospital, Foundation Trust"
                />
              </Tooltip>
              <Heading pl="2em" size="lg" pb="0.5em" pt="2em" color="#55595b">
                Highly Specialist Physiotherapist in Respiratory Care
              </Heading>
              <Text>(2016-2019)</Text>
            </HStack>
            <Divider />
            <HStack mt="1em">
              <Tooltip
                label="University Hospital Southampton, Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/dHtkwYX.jpg"
                  boxSize={['1em', '3em', '8em']}
                  alt="University Hospital Southampton, Foundation Trust"
                />
              </Tooltip>
              <Heading size="lg" pb="0.5em" pt="2em" color="#55595b">
                Junior Rotational Physiotherapist
              </Heading>
              <Text>(2013- 2016)</Text>
            </HStack>
            <Divider />
            <HStack mt="1em">
              <Tooltip
                label="University of Southampton, Faculty of Health Sciences"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/XRpjxCa.jpg"
                  boxSize={['1em', '3em', '6em']}
                  alt="University of Southampton, Faculty of Health Sciences"
                />
              </Tooltip>
              <Heading pl="2em" size="lg" pb="0.5em" pt="2em" color="#55595b">
                Clinical Research Physiotherapist
              </Heading>
              <Text>(2013)</Text>
            </HStack>
            <Divider />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading pt="1em" pb="0.5em" color="#55595b" fontWeight="bold">
                  My Awards and Publications
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Info. Links to pubs. Some images.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading pt="1em" pb="0.5em" color="#55595b" fontWeight="bold">
                  My Education
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Some info here</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default CareerEducation
