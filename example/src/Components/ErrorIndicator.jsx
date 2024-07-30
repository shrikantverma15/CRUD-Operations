import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Container
  } from '@chakra-ui/react'


export default function ErrorIndicator(){
    return(
        <Container padding={30}><Alert status='error'>
        <AlertIcon />
        <AlertTitle>Error!.404 page not found</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert></Container>
    )
}