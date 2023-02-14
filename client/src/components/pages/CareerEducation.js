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
  Text,
  Button,
  VStack,
  Hide
} from '@chakra-ui/react'

const CareerEducation = () => {
  return (
    <Box
      id="background"
      color="white"
      py={['1em', '5em', '8em']}
      px={['1em', '3em', '6em']}
    >
      <Heading
        pb="0.5em"
        color="#55595b"
        pl={['0px', '30px']}
        textAlign={['center', 'left']}
      >
        My Background
      </Heading>
      <Divider />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading
                  pl={['0px', '30px']}
                  pt="1em"
                  pb="0.5em"
                  color="#55595b"
                  fontWeight="bold"
                  size={['sm', 'xl']}
                  textAlign={['center', 'left']}
                >
                  My Healthcare Career
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pt="2em" pb={4}>
            <HStack mt={['0em', '1em']}>
              <Tooltip
                label="Cornwall Partnership Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/8h8qMBY.jpg"
                  boxSize={['3em', '6em']}
                  alt="Cornwall Partnership Foundation Trust"
                />
              </Tooltip>
              <Heading
                pl={['0px', '30px']}
                size={['xs', 'lg']}
                pb="0.5em"
                pt="2em"
                color="#55595b"
              >
                Clinical Specialist Respiratory Physiotherapist
              </Heading>
              <Text fontSize={['xs', 'md']} color="#55595b">
                (2021- 09/2022)
              </Text>
            </HStack>
            <Box display={'flex'} flexDirection={['column']}>
              <Hide below="sm">
                <Box>
                  <Heading
                    pl={['20px', '136px']}
                    pb="0.5em"
                    color="#55595b"
                    size={['xs', 'md']}
                  >
                    Cornwall Partnership Foundation Trust
                  </Heading>
                </Box>
              </Hide>
              <Divider />
              <UnorderedList
                pt={'2em'}
                mx={['20px', '150px']}
                pb={2}
                color="#55595b"
                fontSize={['sm', '2xl']}
                lineHeight={['2em']}
              >
                <ListItem>
                  Collaborated with stakeholders, designed and implemented a new
                  long COVID health service.
                </ListItem>
              </UnorderedList>
            </Box>

            <HStack mt="1em">
              <Tooltip
                label="Cornwall Partnership Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/8h8qMBY.jpg"
                  boxSize={['3em', '6em']}
                  alt="Cornwall Partnership Foundation Trust"
                />
              </Tooltip>
              <Heading
                pl={['0px', '30px']}
                size={['xs', 'lg']}
                pb="0.5em"
                pt="2em"
                color="#55595b"
              >
                Clinical Lead Specialist Respiratory Physiotherapist & Manager,
                Community Respiratory Service
              </Heading>
              <Text fontSize={['xs', 'md']} color="#55595b">
                (2019- 2021)
              </Text>
            </HStack>
            <Box display={'flex'} flexDirection={['column']}>
              <Hide below="sm">
                <Box>
                  <Heading
                    pl={['20px', '136px']}
                    pb="0.5em"
                    color="#55595b"
                    size={['xs', 'md']}
                  >
                    Cornwall Partnership Foundation Trust
                  </Heading>
                </Box>
              </Hide>
              <Divider />
              <UnorderedList
                pt={'2em'}
                lineHeight={['2em']}
                mx={['20px', '150px']}
                pb={2}
                color="#55595b"
                fontSize={['sm', '2xl']}
              >
                <ListItem>
                  Designed and implemented a new community respiratory service
                  in West Cornwall.{' '}
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
            </Box>
            <HStack mt={['0em', '1em']}>
              <Tooltip
                label="The Royal Cornwall Hospital Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/Oulz4QG.jpg"
                  alt="The Royal Cornwall Hospital Foundation Trust"
                  boxSize={['3em', '6em']}
                />
              </Tooltip>
              <Heading
                pl={['0px', '30px']}
                size={['xs', 'lg']}
                pb="0.5em"
                pt="2em"
                color="#55595b"
              >
                Senior Specialist Physiotherapist in Community Stroke
                Rehabilitation
              </Heading>
              <Text fontSize={['xs', 'md']} color="#55595b">
                (2019-2020)
              </Text>
            </HStack>
            <Box>
              <Hide below="sm">
                <Box>
                  <Heading
                    pl={['20px', '136px']}
                    pb="0.5em"
                    color="#55595b"
                    size={['xs', 'md']}
                  >
                    Royal Cornwall Hospital Foundation Trust
                  </Heading>
                </Box>
              </Hide>
            </Box>
            <Divider />
            <HStack mt="1em">
              <Tooltip
                label="The Royal Cornwall Hospital Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/Oulz4QG.jpg"
                  boxSize={['3em', '6em']}
                  alt="The Royal Cornwall Hospital Foundation Trust"
                />
              </Tooltip>
              <Heading
                pl={['0px', '30px']}
                size={['xs', 'lg']}
                pb="0.5em"
                pt="2em"
                color="#55595b"
              >
                Highly Specialist Physiotherapist in Respiratory Care
              </Heading>
              <Text fontSize={['xs', 'md']} color="#55595b">
                (2016-2019)
              </Text>
            </HStack>
            <Box>
              <Hide below="sm">
                <Box>
                  <Heading pl="136px" size="md" pb="0.5em" color="#55595b">
                    Royal Cornwall Hospital Foundation Trust
                  </Heading>
                </Box>
              </Hide>
            </Box>
            <Divider />
            <HStack mt="1em">
              <Tooltip
                label="University Hospital Southampton Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/dHtkwYX.jpg"
                  boxSize={['3em', '6em']}
                  alt="University Hospital Southampton Foundation Trust"
                />
              </Tooltip>
              <Heading
                pl={['0px', '30px']}
                size={['xs', 'lg']}
                pb="0.5em"
                pt="2em"
                color="#55595b"
              >
                Junior Rotational Physiotherapist
              </Heading>
              <Text fontSize={['xs', 'md']} color="#55595b">
                (2013- 2016)
              </Text>
            </HStack>

            <Box>
              <Hide below="sm">
                <Box>
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    University Hospital Southampton Foundation Trust
                  </Heading>
                </Box>
              </Hide>
            </Box>
            <Divider />
            <HStack mt="1em">
              <Tooltip
                label="University of Southampton, Faculty of Health Sciences"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/XRpjxCa.jpg"
                  boxSize={['3em', '6em']}
                  alt="University of Southampton, Faculty of Health Sciences"
                />
              </Tooltip>
              <Heading
                pl={['0px', '30px']}
                size={['xs', 'lg']}
                pb="0.5em"
                pt="2em"
                color="#55595b"
              >
                Clinical Research Physiotherapist
              </Heading>
              <Text fontSize={['xs', 'md']} color="#55595b">
                (2013)
              </Text>
            </HStack>
            <Box display={'flex'} flexDirection={['column']}>
              <Hide below="sm">
                <Box>
                  <Heading pl="136px" size="md" pb="0.5em" color="#55595b">
                    University of Southampton, Faculty of Health Sciences
                  </Heading>
                </Box>
              </Hide>
            </Box>
            <Divider />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading
                  pl={['0px', '30px']}
                  pt="1em"
                  pb="0.5em"
                  color="#55595b"
                  fontWeight="bold"
                  size={['sm', 'xl']}
                  textAlign={['center', 'left']}
                >
                  My Awards & Publications
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <HStack mt="1em">
              <Tooltip
                label="Royal Cornwall Hospital Foundation Trust"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/Oulz4QG.jpg"
                  boxSize={['3em', '6em']}
                  alt="Royal Cornwall Hospital Foundation Trust"
                />
              </Tooltip>
              <VStack alignItems="flex-start">
                <HStack>
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    “Care Award” Winner
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (2018)
                  </Text>
                </HStack>
                <Box display={'flex'} flexDirection={['column']}>
                  <Hide below="sm">
                    <Box>
                      <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                        Royal Cornwall Hospital Foundation Trust, Intensive Care
                        Unit
                      </Heading>
                    </Box>
                  </Hide>
                </Box>
              </VStack>
            </HStack>
            <Divider />

            <HStack mt="1em">
              <Tooltip label="The Society of Backpain Research" fontSize="md">
                <Image
                  src="https://i.imgur.com/XZ2JdoL.jpg"
                  boxSize={['3em', '6em']}
                  alt="The Society of Backpain Research"
                />
              </Tooltip>
              <VStack alignItems="flex-start">
                <HStack>
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    “Best New Investigator Award” Winner
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (2015)
                  </Text>
                </HStack>
                <Box display={'flex'} flexDirection={['column']}>
                  <Hide below="sm">
                    <Box>
                      <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                        Society of Back-pain Research International Conference
                      </Heading>
                    </Box>
                  </Hide>
                </Box>
              </VStack>
            </HStack>
            <Divider />
            <HStack mt="1em">
              <Tooltip label="The European Spine Journal" fontSize="md">
                <Image
                  src="https://i.imgur.com/nsmhLsc.jpg"
                  boxSize={['3em', '6em']}
                  alt=" The European Spine Journal"
                />
              </Tooltip>
              <VStack alignItems="flex-start">
                <HStack>
                  {' '}
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    Article: &quot;Shared decision-making in back pain
                    consultations: an illusion or reality?&quot;
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (2014)
                  </Text>
                </HStack>
                <HStack alignItems="flex-start">
                  <Box display={'flex'} flexDirection={['column']}>
                    <Hide below="sm">
                      <Box>
                        <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                          The European Spine Journal
                        </Heading>
                      </Box>
                    </Hide>
                  </Box>
                  <Button
                    variant="solid"
                    color="#0e3849"
                    as="a"
                    href="https://link.springer.com/article/10.1007/s00586-014-3187-0"
                    target="_blank"
                  >
                    Read article
                  </Button>
                </HStack>
              </VStack>
            </HStack>
            <Divider mt="20px" />

            <HStack mt="1em">
              <Tooltip label="The Journal of Hand Therapy" fontSize="md">
                <Image
                  src="https://i.imgur.com/ksb10cS.jpg"
                  boxSize={['3em', '6em']}
                  alt="The Journal of Hand Therapy"
                />
              </Tooltip>

              <VStack alignItems="flex-start">
                <HStack>
                  {' '}
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    Article: &quot;The thoughts and feelings held by clinicians
                    about the delivery of a placebo thumb splint in an
                    osteoarthritis rehabilitation trial.&quot;
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (2013)
                  </Text>
                </HStack>
                <HStack alignItems="flex-start">
                  <Box display={'flex'} flexDirection={['column']}>
                    <Hide below="sm">
                      <Box>
                        <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                          The Journal of Hand Therapy
                        </Heading>
                      </Box>
                    </Hide>
                  </Box>

                  <Button
                    variant="solid"
                    color="#0e3849"
                    as="a"
                    href="https://journals.sagepub.com/doi/10.1177/1758998313496979"
                    target="_blank"
                  >
                    Read article
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading
                  pl={['0px', '30px']}
                  pt="1em"
                  pb="0.5em"
                  color="#55595b"
                  fontWeight="bold"
                  size={['sm', 'xl']}
                  textAlign={['center', 'left']}
                >
                  My Education
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <HStack mt="1em">
              <Tooltip label="General Assembly, London" fontSize="md">
                <Image
                  src="https://i.imgur.com/jMGOSzI.png"
                  boxSize={['3em', '6em']}
                  alt="General Assembly"
                />
              </Tooltip>
              <VStack alignItems="flex-start">
                <HStack>
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    Software Engineering Immersive
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (09-12/2022)
                  </Text>
                </HStack>
                <Box display={'flex'} flexDirection={['column']}>
                  <Hide below="sm">
                    <Box>
                      <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                        General Assembly, London
                      </Heading>
                      <Heading pl="30px" size="sm" pb="0.5em" color="#55595b">
                        Certificate of completion
                      </Heading>
                    </Box>
                  </Hide>
                </Box>
              </VStack>
            </HStack>
            <Divider />

            <HStack mt="1em">
              <Tooltip
                label="University of Southampton, Faculty of Health Sciences"
                fontSize="md"
              >
                <Image
                  src="https://i.imgur.com/XRpjxCa.jpg"
                  boxSize={['3em', '6em']}
                  alt="University of Southampton, Faculty of Health Sciences"
                />
              </Tooltip>
              <VStack alignItems="flex-start">
                <HStack>
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    MSc Physiotherapy
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (2011-2013)
                  </Text>
                </HStack>
                <Box display={'flex'} flexDirection={['column']}>
                  <Hide below="sm">
                    <Box>
                      <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                        University of Southampton, Faculty of Heath Sciences
                      </Heading>
                      <Heading pl="30px" size="sm" color="#55595b" pb="0.5em">
                        {' '}
                        Merit
                      </Heading>
                    </Box>
                  </Hide>
                </Box>
              </VStack>
            </HStack>
            <Divider />

            <HStack mt="1em">
              <Tooltip label="Cardiff University" fontSize="md">
                <Image
                  src="https://i.imgur.com/VUhC3ux.jpg"
                  boxSize={['3em', '6em']}
                  alt="Cardiff University"
                />
              </Tooltip>
              <VStack alignItems="flex-start">
                <HStack>
                  <Heading
                    pl={['0px', '30px']}
                    size={['xs', 'lg']}
                    pb="0.5em"
                    pt="2em"
                    color="#55595b"
                  >
                    BSc Biomedical Science
                  </Heading>
                  <Text fontSize={['xs', 'md']} color="#55595b">
                    (2006-2009)
                  </Text>
                </HStack>
                <Box display={'flex'} flexDirection={['column']}>
                  <Hide below="sm">
                    <Box>
                      <Heading pl="30px" size="md" pb="0.5em" color="#55595b">
                        University of Cardiff, School of Biosciences
                      </Heading>
                      <Heading pl="30px" size="sm" color="#55595b">
                        2.1 Hons
                      </Heading>
                    </Box>
                  </Hide>
                </Box>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default CareerEducation
