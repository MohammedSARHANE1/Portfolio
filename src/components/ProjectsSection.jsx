
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box,Heading ,Text} from "@chakra-ui/react";
import Card from './Card';


function StackEx() {
  const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc:"./src/images/photo1.jpg",
      getUrl:"/projectFirst"
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc:"./src/images/photo2.jpg",
      getUrl:"/project2"
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc:"./src/images/photo3.jpg",
      getUrl:"/project3"
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      getImageSrc: "./src/images/photo4.jpg",
      getUrl:"/project4"
    },
  ];
  
  return (

    <Stack     display="grid"
    gridTemplateColumns="repeat(2,minmax(0,1fr))"
    gridGap={8}>
      {projects.map((project)=>(
        <Card id="Card"
        key={project.title}
        title={project.title}
        desc={project.description}
        imageSrc={project.getImageSrc}
        getUrl={project.getUrl}
        />
      ))}
    </Stack>
  )
}


function ProjectsSection() {
  return (
   <Box   backgroundColor="#0a9396"
   
   p={30}
   spacing={8}>
    <Heading  m={20} as="h1" id="projects-section">
        Featured Projects
      </Heading>
    <StackEx />
  </Box>
  )
}

export default ProjectsSection
