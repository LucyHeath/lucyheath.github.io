import {
  Divider,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading
} from '@chakra-ui/react'

const InfoTabs = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>About Me</Tab>
          <Tab>My Skills</Tab>
          <Tab>My Experience</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>
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
            </Text>
          </TabPanel>
          <TabPanel>
            <Heading>Technical Skills</Heading>
            <Divider />
            <Text>
              Frontend: HTML5, CSS3, JavaScript, React.js, Sass, Bootstrap,
              Chakra UI{' '}
            </Text>
            <Text>
              Backend: Node.js, Express.js, MongoDB, Mongoose, Python, Django,
              SQL, PostgreSQL, TablePlus, Insomnia, Django REST Framework{' '}
            </Text>
            <Text>
              Other: Github, VSCODE, RESTful APIs, Yarn, npm, Pip, Pipenv,
              Heroku, Chrome Dev tools, Command line, Trello, Slack, Wireframing
            </Text>
            <Heading>Soft Skills</Heading>
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
            <Heading>
              Software Engineering Immersive, General Assembly London
              (16/09/-16/12/2022)
            </Heading>
            <Divider />
            <Text>
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
    </>
  )
}

export default InfoTabs
