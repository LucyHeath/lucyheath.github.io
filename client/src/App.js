import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import Projects from './components/pages/Projects'
import InfoTabs from '../src/components/pages/InfoTabs'
import CareerEducation from './components/pages/CareerEducation'
import Hero from '../src/components/pages/Hero'
import Navbar from '../src/components/common//NavBar'
import InterestsSection from '../src/components/pages/InterestsSection'
import ContactSection from '../src/components/pages/ContactSection'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <InfoTabs />
        <Projects />
        <CareerEducation />
        <InterestsSection />
        <ContactSection />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
