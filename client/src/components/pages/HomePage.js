import { Box } from '@chakra-ui/react'

import ProjectCards from '../common/ProjectCards'
import InfoTabs from '../common/InfoTabs'
import FurtherInfoAccordian from '../common/FurtherInfoAccordian'
import Hero from '../common/Hero'
import Navbar from '../common/NavBar'
import InterestsSection from '../common/InterestsSection'
import ContactSection from '../common/ContactSection'

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <InfoTabs />
      <ProjectCards />
      <FurtherInfoAccordian />
      <InterestsSection />
      <ContactSection />
    </Box>
  )
}

export default HomePage
