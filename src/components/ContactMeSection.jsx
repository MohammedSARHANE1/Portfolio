
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import React, {useEffect} from "react"; 

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const  initialValues={
  firstName:'',
  email:'',
  comment:''
}
const onSubmit=values=>{console.log("field data ",values);}

const validationSchema=Yup.object({
  firstName: Yup.string().required('Required'),
  email:Yup.string().email('invalid email').required('Required'),
  comment:Yup.string().required('plz  for us your opinion :)')
})
function ContactMeSection() {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const formik=useFormik({
    initialValues,
    onSubmit:  (values) => {submit('https://example.com',values)},
    validationSchema
  });
 
  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]); 
  return (
    <Box
    

    backgroundColor="#8AA399"
    py={16}
    spacing={8}>
    
    <VStack p={32} alignItems="flex-start"  
  spacing={4}
  align='stretch' display="grid" >
    <Heading as="h1" id="contactme-section">
      Contact me
    </Heading>
    <Box p={6} rounded="md" >
    <form onSubmit={formik.handleSubmit} >
            <VStack   spacing={4}  align='stretch' >
              <FormControl>
                <FormLabel htmlFor="firstName">Name<span>*</span></FormLabel>
                <Input 
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                
                />
               {formik.touched.firstName ? (
          <div id="errors">{formik.errors.firstName}</div>
        ) : null} 
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="email">Email Address<span>*</span></FormLabel>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                 
                 {formik.touched.email?<div  id="errors">{formik.errors.email}</div>:null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea 
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.comment ? (
          <div id="errors">{formik.errors.comment}</div>
        ) : null}
              </FormControl>
              <Button type="submit" colorScheme="purple"  isLoading={isLoading}>
                Submit
              </Button>
              </VStack>
              
          </form>
          </Box>
  </VStack>
  </Box>
  )
}

export default ContactMeSection
