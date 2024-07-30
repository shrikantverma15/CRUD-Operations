import React, { useState, useContext} from "react";
import {
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  VStack,
  Container,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  
  const { Login } = useContext(AuthContext);

  const handleClick = () => setShow(!show);

  async function handleLogin() {
    try {
      let res = await axios({
        method: "post",
        url: `https://reqres.in/api/login`,
        data: {
          email: email,
          password: password,
        },
      });
      console.log(res.data.token);
        Login(res.data.token);
        setEmail("");
        setPassword("");
    } catch (error) {
      console.log("Error during login:", error);
    }
  }

  return (
    <Container maxW={400}>
      <VStack bg="" w="100%" p={4}  spacing={6} padding={10} margin={10}>
        <Heading color="#718096">Login</Heading>

        <Input
          placeholder="Enter Email"
          size="md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="red" variant="solid" color="" onClick={handleLogin}>
          LOGIN
        </Button>
      </VStack>
      <Image src="https://th.bing.com/th/id/OIP.DS8_-zPolUSDmI2xkmBDDgHaCS?rs=1&pid=ImgDetMain"
      alt="Welcome Banner" 
      margin="10"/>
    </Container>
  );
}

export default Login;
