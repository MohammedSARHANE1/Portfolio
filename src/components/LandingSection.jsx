import React from 'react'
import { Box, Avatar,ChakraProvider ,Heading ,Text} from "@chakra-ui/react";
function LandingSection() {
  return (
    
    <Box
     bg="#005f73"
    className='landingSection'
    display="grid" 
    justifyItems="center"
    alignContent="center" >
    <Box ><ChakraProvider  ><Avatar size="xl" name="sarhane mohammed" src="./public/image_port.jpg"  /></ChakraProvider></Box>

    <Box  >
    <Text >
      Hello ,I am Mohmmed!
  </Text>
    </Box> 
    <Box >
  <Heading as='h1' size='xl' >
     A front End developper 
  </Heading>
  <Heading   as='h1' size='xl' >
     specialised in React
  </Heading>
    </Box>
  
   </Box>
   
  )
}

export default LandingSection
