import { useParams,useNavigate } from "react-router-dom";
import ErrorIndicator from "../Components/ErrorIndicator";
import LoadingIndicator from "../Components/LoadingIndicator.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function TicketView() {
    const navigate=useNavigate();
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData(id) {
    setLoading(true);
    setError(false);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`,
      });
      setLoading(false);
      if (res.data) {
        setTicket(res.data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  const { title, description, assignee, status, priority } = ticket;

async function handleDelete(){
    try {
        let res= await axios({
            method:"delete",
            url:`http://localhost:3000/tickets/${id}`
        })
        if(res.status===200){
            navigate("/tickets")
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
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
              Assignee
            </Heading>
            <Text pt="2" fontSize="sm">
              {assignee}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
       <HStack>
       <Button variant={'outline'} colorScheme="red" onClick={()=>{
            navigate(`/ticket/edit/${id}`)
        }}>Edit Ticket</Button>

<Button variant={'outline'} colorScheme="red" onClick={
            handleDelete
        }>Delete Ticket</Button>
       </HStack>
      </CardFooter>
    </Card>
  );
}
