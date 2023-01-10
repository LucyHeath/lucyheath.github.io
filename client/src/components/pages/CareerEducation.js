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
  Divider
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
                  Healthcare Career
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Heading size="sm">
              Clinical Specialist Respiratory Physiotherapist
              CornwallPartnership FT (2021- 09/2022)
            </Heading>
            <UnorderedList pb={2}>
              <ListItem>
                Collaborated with stakeholders, designed and implemented a new
                long COVID health service.
              </ListItem>
            </UnorderedList>
            <Heading size="sm">
              Clinical Lead Specialist Respiratory Physiotherapist & Manager of
              the West Cornwall Community Respiratory Service Cornwall
              Partnership FT (2019- 2021)
            </Heading>
            <Divider />
            <UnorderedList pb={2}>
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
            <Heading size="sm" pb={2}>
              Senior Specialist Physiotherapist in Community Stroke
              Rehabilitation The Royal Cornwall Hospital FT (2019-2020)
            </Heading>
            <Divider />
            <Heading size="sm" pb={2}>
              Highly Specialist Physiotherapist in Respiratory Care The Royal
              Cornwall Hospital FT (2016-2019)
            </Heading>
            <Divider />
            <Heading size="sm" pb={2}>
              Junior Rotational Physiotherapist University Hospital Southampton
              FT (2013- 2016)
            </Heading>
            <Divider />
            <Heading size="sm" pb={2}>
              Clinical Research Physiotherapist, University of Southampton
              (2013)
            </Heading>
            <Divider />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading pt="1em" pb="0.5em" color="#55595b" fontWeight="bold">
                  Awards and Publications
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
                  Education
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
