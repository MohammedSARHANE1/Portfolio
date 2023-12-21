// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook ,faLinkedin,faGithub,faTwitter} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
   
    <Flex   align="center" bg="black"   justify="space-between" >
     <Box margin="0.5rem"  display="flex"  justifyContent="flex-start">
       <Box margin="4px">
        <Link
          to="https://www.facebook.com/mohame65131963186185563161311/"
          isExternal
        >
          <FontAwesomeIcon width="20px" height="20px" icon={faFacebook} style={{color: "#ffffff",}} size="2x" />
        </Link>
        </Box>
      <Box margin="4px" >
        <Link
          to="https://twitter.com/home"
          isExternal
        >
          <FontAwesomeIcon width="20px" height="20px" icon={faTwitter} style={{color: "#ffffff",}} size="2x" />
        </Link>
        </Box>
      <Box margin="4px">
        <Link
          to="https://www.linkedin.com/in/mohammed-sarhane-839581153/"
          isExternal
        >
          <FontAwesomeIcon width="20px" height="20px" icon={faLinkedin} style={{color: "#ffffff",}}  size="2x" />
        </Link>
        </Box>
        <Box margin="4px">
        <Link
          to="https://github.com/MohammedSARHANE1"
          isExternal
        >
          <FontAwesomeIcon  width="20px" height="20px" icon={faGithub} style={{color: "#ffffff",}} size="2x" />
        </Link>
      </Box>
        </Box>
     
     
     <Box margin="0.5rem"  display="flex"   justifyContent="flex-end">
     <Box margin="0.5rem">
        <Link to="/projectsSection"  style={{color:"white"}} >Projects</Link>
      </Box>
      <Box margin="0.5rem">
        <Link to="/contactMeSection" style={{color:"white"}}>Conctact me</Link>
      </Box>
     </Box>
    
      </Flex>
  
  );
};

export default Header;
/* <
      <Heading color="white">My Portfolio</Heading>

     
       */
