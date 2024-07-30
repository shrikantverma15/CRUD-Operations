import { Box, useToast, Button, Heading, Container, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const toast = useToast();
  const navigate = useNavigate();

  function handleChange() {
    toast({
      title: 'You are redirected to the about page.',
      description: "About",
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
    navigate(`/about`);
  }

  return (
    <Container maxW='2xxl'>
      <Image src="https://i.imgur.com/xLqKfLg.jpeg" />
      <Box bg="Teal" w="100%" p={4} color="white">
        <Heading color="black">Home</Heading>
        <Button onClick={handleChange}>Click Me</Button>
      </Box>
    </Container>
  );
}

export default Home;
