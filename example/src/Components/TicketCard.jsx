import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
  Text,
  CardFooter,
  Box,
  Button,
} from "@chakra-ui/react";

export default function TicketCard({ id, title, status, priority, description }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Description
            </Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Status
            </Heading>
            <Text pt="2" fontSize="sm">
              {status}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Priority
            </Heading>
            <Text pt="2" fontSize="sm">
              {priority}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => navigate(`/ticket/view/${id}`)}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
}
