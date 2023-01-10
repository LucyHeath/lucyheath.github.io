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
  HStack
} from '@chakra-ui/react'

const InfoTabs = () => {
  return (
    <Box
      backgroundColor={'white'}
      px={('1em', '3em', '6em')}
      py={['3em', '5em', '8em']}
    >
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab color="#55595b" fontWeight="bold">
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
            <Text color="#55595b" textColor="#55595b" pt="2em">
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
            <Heading textColor="#55595b" pb="0.5em" pt="2em">
              Technical Skills
            </Heading>
            <Divider />
            <Text>
              <chakra.span fontWeight="bold">Frontend:</chakra.span> HTML5 |
              CSS3 | JavaScript | React.js | Sass | Bootstrap | Chakra UI{' '}
            </Text>
            <Text>
              <chakra.span fontWeight="bold"> Backend:</chakra.span> Node.js |
              Express.js | MongoDB | Mongoose | Python | Django | SQL |
              PostgreSQL | TablePlus | Insomnia | Django REST Framework{' '}
            </Text>
            <Text>
              <chakra.span fontWeight="bold"> Development Tools: </chakra.span>
              Github | VSCODE | RESTful APIs | yarn | npm | Pip | Pipenv |
              Heroku | Chrome Dev tools |Command line | Trello| Slack|
              Excallidraw| Zoom
            </Text>
            <Heading textColor="#55595b" pb="0.5em" pt="1.5em">
              Soft Skills
            </Heading>
            <Divider />
            <Text>
              I’ve demonstrated an exemplary aptitude for rapid problem solving,
              team working, communication etc throughout my career in healthcare
              e.g. highly pressured working in Intensive Care, and work with
              respiratory patients during the pandemic. I have experience of
              leadership, project management and balancing competing demands. I
              have experience working in academia and research. An enthusiastic
              learner, I&apos;ve demonstrated commitment and drive to transition
              into development by successfully completing the General Assembly
              course despite no prior technical skills or experience.
            </Text>
          </TabPanel>
          <TabPanel>
            <Heading textColor="#55595b" pb="0.5em" pt="2em">
              Software Engineering Immersive Programme
            </Heading>
            <HStack pb="1em">
              <Image
                src="https://i.imgur.com/jMGOSzI.png"
                boxSize={['1em', '3em']}
                alt="AGeneral Assembly icon"
              />
              <Heading size="lg" textColor="#55595b">
                General Assembly, London
              </Heading>
              <Heading size="s" textColor="#55595b">
                (16/09/-16/12/2022)
              </Heading>
            </HStack>
            <Divider />
            <Text pt="3em" textColor="#55595b">
              A 12 week 9-5 intensive programme taken remotely using Zoom and
              Slack (480 hours) with additional homework ( typically 4-5
              hours/day ) and requirement for weekend working. I learnt the
              fundamentals of building full-stack web applications and worked
              with multiple frameworks and stacks, practiced version control
              with Git and GitHub and executed four varying software engineering
              projects in an Agile development workflow. The programme reflected
              a real life work environment, with daily standup meetings and a
              high level of professionalism and accountability required.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default InfoTabs
