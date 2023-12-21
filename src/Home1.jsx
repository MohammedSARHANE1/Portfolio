
import './Home.css'
import Header from './components/Header'
import FullScreenSection from './components/FullScreenSection'
import LandingSection from './components/LandingSection'
import ProjectsSection from './components/ProjectsSection'
import ContactMeSection from './components/ContactMeSection'
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Footer from './components/Footer'
import { ChakraProvider } from "@chakra-ui/react"
function Home1() {


  return (
  
   
   <ChakraProvider>
      <AlertProvider>
        <FullScreenSection>
      <div className='Home'>
          <Header />

          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
          </div>
          </FullScreenSection>
      </AlertProvider>
    </ChakraProvider>
   
  
  )
}

export default Home1
