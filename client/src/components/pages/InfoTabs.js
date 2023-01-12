import {
  Divider,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Box,
  chakra,
  Image,
  HStack,
  IconButton,
  Tooltip
} from '@chakra-ui/react'

import { AiFillHtml5, AiFillGithub, AiFillChrome } from 'react-icons/ai'
import {
  FaSass,
  FaReact,
  FaNodeJs,
  FaPython,
  FaSlack,
  FaDatabase
} from 'react-icons/fa'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { BsFillBootstrapFill } from 'react-icons/bs'
import {
  SiChakraui,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiInsomnia,
  SiVisualstudio,
  SiHeroku,
  SiYarn,
  SiNpm,
  SiTrello,
  SiZoom
} from 'react-icons/si'
import { FcCommandLine } from 'react-icons/fc'

const InfoTabs = () => {
  return (
    <Box
      backgroundColor={'white'}
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
    >
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab color="#55595b" fontWeight="bold" >
            <Heading>About Me</Heading>
          </Tab>
          <Tab color="#55595b" fontWeight="bold">
            <Heading>My Skills</Heading>
          </Tab>
          <Tab color="#55595b" fontWeight="bold">
            <Heading>My Experience</Heading>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text
              color="#55595b"
              textColor="#55595b"
              pt="4em"
              lineHeight={'2em'}
              mx="50px"
            >
              <chakra.span color="#55595b" fontWeight="bold">
                &quot;
              </chakra.span>
              I have had a successful and fulfilling career in the NHS as a
              physiotherapist and manager, but after 10 years and having
              achieved my personal goals I am looking for a new challenge that
              will offer me creativity and opportunity for continued learning
              and personal growth. After some research and mentoring from others
              in the industry, I began exploring software engineering and
              subsequently enrolled in the bootcamp programme with General
              Assembly. I have found it to be an exciting and inspiring industry
              that complements my aptitude for problem solving and enthusiasm
              for creative work. I am looking for a role as a developer in a
              collaborative team environment with opportunities to progress my
              technical skills.
              <chakra.span color="#55595b" fontWeight="bold">
                &quot;
              </chakra.span>
            </Text>
          </TabPanel>
          <TabPanel>
            <Heading size="lg" textColor="#55595b" pb="0.5em" pt="2em">
              Technical Skills
            </Heading>
            <Divider mb="2em" />
            <HStack my={'2em'}>
              <Text ml="50px" mr="50px" color="#55595b">
                <chakra.span color="#55595b" fontWeight="bold">
                  Frontend:
                </chakra.span>{' '}
              </Text>
              <HStack>
                <Tooltip label="HTML5" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="HTML5"
                    size="lg"
                    variant="outline"
                    icon={<AiFillHtml5 />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="CSS3" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="CSS3"
                    size="lg"
                    variant="outline"
                    icon={<IoLogoCss3 />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="JavaScript" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="JavaScript"
                    size="lg"
                    variant="outline"
                    icon={<IoLogoJavascript />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="React.js" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="React.js"
                    size="lg"
                    variant="outline"
                    icon={<FaReact />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Sass" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Sass"
                    size="lg"
                    variant="outline"
                    icon={<FaSass />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Bootstrap" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Bootstrap"
                    size="lg"
                    variant="outline"
                    icon={<BsFillBootstrapFill />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="ChakraUI" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="ChakraUI"
                    size="lg"
                    variant="outline"
                    icon={<SiChakraui />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
              </HStack>
            </HStack>
            <HStack mb={'2em'}>
              <Text ml="50px" mr="53px" color="#55595b">
                <chakra.span color="#55595b" fontWeight="bold">
                  Backend:
                </chakra.span>
              </Text>
              <HStack>
                <Tooltip label="Node.js" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Node.js"
                    size="lg"
                    variant="outline"
                    icon={<FaNodeJs />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="MongoDB" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="MongoDB"
                    size="lg"
                    variant="outline"
                    icon={<SiMongodb />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Python" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Python"
                    size="lg"
                    variant="outline"
                    icon={<FaPython />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Django" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Django"
                    size="lg"
                    variant="outline"
                    icon={<SiDjango />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="PostgreSQL" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="PostgreSQL"
                    size="lg"
                    variant="outline"
                    icon={<SiPostgresql />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="SQL" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="SQL"
                    size="lg"
                    variant="outline"
                    icon={<FaDatabase />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
              </HStack>
            </HStack>
            <HStack mb={'1em'}>
              <Text ml="50px" mr="78px" color="#55595b">
                <chakra.span color="#55595b" fontWeight="bold">
                  {' '}
                  Tools:
                </chakra.span>
              </Text>
              <HStack>
                <Tooltip label="Insomnia" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Insomnia"
                    size="lg"
                    variant="outline"
                    icon={<SiInsomnia />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Visual Studio Code" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Visual Studio Code"
                    size="lg"
                    variant="outline"
                    icon={<SiVisualstudio />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="GitHub" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="GitHub"
                    size="lg"
                    variant="outline"
                    icon={<AiFillGithub />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Chrome Dev Tools" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Chrome Dev Tools"
                    size="lg"
                    variant="outline"
                    icon={<AiFillChrome />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Heroku" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Heroku"
                    size="lg"
                    variant="outline"
                    icon={<SiHeroku />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="yarn" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="yarn"
                    size="lg"
                    variant="outline"
                    icon={<SiYarn />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Npm" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Npm"
                    size="lg"
                    variant="outline"
                    icon={<SiNpm />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Trello" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Trello"
                    size="lg"
                    variant="outline"
                    icon={<SiTrello />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Command Line" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Command Line"
                    size="lg"
                    variant="outline"
                    icon={<FcCommandLine />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Zoom" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Zoom"
                    size="lg"
                    variant="outline"
                    icon={<SiZoom />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
                <Tooltip label="Slack" fontSize="md">
                  <IconButton
                    colorScheme="#ffffff"
                    aria-label="Slack"
                    size="lg"
                    variant="outline"
                    icon={<FaSlack />}
                    isExternal
                    target="_blank"
                  />
                </Tooltip>
              </HStack>
            </HStack>
            <Heading
              size="lg"
              mt={'2em'}
              textColor="#55595b"
              pb="0.5em"
              pt="1.5em"
            >
              Soft Skills
            </Heading>
            <Divider />
            <Text my={'2em'} color="#55595b" lineHeight={'2em'} mx="50px">
              <chakra.span color="#55595b" fontWeight="bold">
                &quot;
              </chakra.span>
              I&apos;ve demonstrated an exemplary aptitude for{' '}
              <chakra.span fontWeight="bold">rapid problemsolving</chakra.span>
              ,&nbsp;
              <chakra.span fontWeight="bold">team working</chakra.span>,{' '}
              <chakra.span fontWeight="bold">communication</chakra.span> etc
              throughout my career in healthcare e.g. highly pressured working
              in Intensive Care, and work with respiratory patients during the
              pandemic. I have experience of{' '}
              <chakra.span fontWeight="bold">leadership</chakra.span>,{' '}
              <chakra.span fontWeight="bold">project management</chakra.span>{' '}
              and&nbsp;
              <chakra.span fontWeight="bold">
                balancing competing demands
              </chakra.span>
              . I have experience working in{' '}
              <chakra.span fontWeight="bold">academia</chakra.span> and{' '}
              <chakra.span fontWeight="bold">research</chakra.span>. An
              enthusiastic learner, I&apos;ve demonstrated{' '}
              <chakra.span fontWeight="bold">commitment</chakra.span> and{' '}
              <chakra.span fontWeight="bold">drive</chakra.span>&nbsp; to
              transition into development by successfully completing the General
              Assembly course despite no prior technical skills or experience.
              <chakra.span color="#55595b" fontWeight="bold">
                &quot;
              </chakra.span>
            </Text>
          </TabPanel>
          <TabPanel>
            <HStack pb="0.5em" pt="4em">
              <Image
                src="https://i.imgur.com/jMGOSzI.png"
                boxSize={['1em', '3em', '4em']}
                alt="General Assembly icon"
              />
              <Heading size="lg" px="1em" textColor="#55595b">
                Software Engineering Immersive Programme
              </Heading>
              <Text textColor="#55595b" pb="5px">
                (16/09/-16/12/2022)
              </Text>
            </HStack>

            <Divider />
            <Text pt="3em" textColor="#55595b" lineHeight={'2em'} mx="50px">
              A{' '}
              <chakra.span fontWeight="bold">
                12 week 9-5 intensive programme
              </chakra.span>{' '}
              (480 hours) taken remotely using Zoom and Slack with additional
              homework (typically 4-5 hours/day) and requirement for weekend
              working. I learnt the{' '}
              <chakra.span fontWeight="bold">
                fundamentals of building full-stack web applications and worked
                with multiple frameworks and stacks, practiced version control
                with Git and GitHub and executed four varying software
                engineering projects in an Agile development workflow.
              </chakra.span>{' '}
              The programme reflected a real life work environment, with daily
              standup meetings and a{' '}
              <chakra.span fontWeight="bold">
                high level of professionalism
              </chakra.span>{' '}
              and <chakra.span fontWeight="bold">accountability</chakra.span>{' '}
              required.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default InfoTabs
