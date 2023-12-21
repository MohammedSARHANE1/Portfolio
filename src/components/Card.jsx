import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Heading, Image,Text} from "@chakra-ui/react";
function Card({ title, desc, imageSrc,getUrl, ...rest }) {
  return (
    <Box id="Card"   borderRadius="xl" space="10px" shadow='md' bg="white"   {...rest}>
    <Image  borderRadius="xl" src={imageSrc} alt={title}/>
    <Heading as="h3" size="md"> <b>{title}</b></Heading>
    <Text color="#64748b" fontSize="lg" >{desc}</Text>
    <Link to={getUrl}> <b spacing={2} alignitems="center">See more ➜</b></Link>
  </Box>
  )
}

export default Card
