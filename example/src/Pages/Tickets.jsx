import {
  Button,
  Container,
  SimpleGrid,
  Flex,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIndicator from "../Components/LoadingIndicator.jsx";
import ErrorIndicator from "../Components/ErrorIndicator";
import TicketCard from "../Components/TicketCard.jsx";

function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  async function fetchAndUpdateData(sortOrderValue, filterValue) {
    setLoading(true);
    setError(false);
    try {
      let params = {};
      if (sortOrderValue) {
        params._sort = "priority";
        params._order = sortOrderValue;
      }
      if (filterValue) {
        params.status = filterValue;
      }

      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
        params: params,
      });
      setLoading(false);
      if (res.data) {
        setTickets(res.data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(sortOrderValue, filterValue);
  }, [sortOrderValue, filterValue]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxW="container.lg">
      <Flex direction="row-reverse" margin={10}>
        <Button
          variant="outline"
          colorScheme="green"
          onClick={() => {
            navigate("/ticket/create");
          }}
        >
          Create Tickets
        </Button>
      </Flex>
      <HStack spacing={4} my={4}>
        <Select
          bg="#C4F1F9"
          color="black"
          placeholder="Sort by Priority"
          value={sortOrderValue}
          onChange={(e) => {
            setSortOrderValue(e.target.value);
          }}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select
          bg="#C4F1F9"
          color="black"
          placeholder="Filter By Status"
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        >
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </Select>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {tickets?.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Tickets;
