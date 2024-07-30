import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Button, Flex, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";


const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/login",
    label: "Login",
  },
  {
    to: "/tickets",
    label: "Tickets",
  },
  {
    to: "/about",
    label: "About",
  },
];

export default function Navbar() {
  const { auth, Logout } = useContext(AuthContext);

  return (
    <Container maxW="container.xl" margin={5}>
      <Flex
        align="center"
        justify="space-between"
        background="#E2E8F0"
        padding={4}
      >
      
          {links
            .filter((link) => link.label !== "Login" || !auth.isLoggedIn) // Hide the Login link when authenticated
            .map((link) => (
              <ChakraLink
                color="#171923"
                as={ReactRouterLink}
                key={link.to}
                to={link.to}
              >
                {link.label}
              </ChakraLink>
            ))}
        {auth.isLoggedIn && (
          <Button colorScheme="blue" onClick={Logout}>
            Logout
          </Button>
        )}
      </Flex>
    </Container>
  );
}
