import { Spinner,Container } from '@chakra-ui/react'


export default function LoadingIndicator(){
    return(
       <Container padding={30}> <Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'
     /></Container>
    )
}