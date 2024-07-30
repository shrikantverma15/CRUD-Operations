import { useParams, useNavigate } from "react-router-dom";
import ErrorIndicator from "../Components/ErrorIndicator";
import LoadingIndicator from "../Components/LoadingIndicator.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Button,
    Container,
    VStack,
    Input,
    Textarea,
    Select,
} from "@chakra-ui/react";

export default function TicketEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ticket, setTicket] = useState({
        title: "",
        description: "",
        assignee: "",
        status: "",
        priority: 0,
    });
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

    async function editTicket() {
        let updatedData = {
            title: ticket.title,
            description: ticket.description,
            status: ticket.status,
            priority: ticket.priority,
            assignee: ticket.assignee,
        };
        try {
            let res = await axios({
                method: "put",
                url: `http://localhost:3000/tickets/${id}`,
                data: updatedData,
            });
            if (res.status === 200) {
                navigate("/tickets");
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    const { title, description, assignee, status, priority } = ticket;
    return (
        <Container>
            <VStack spacing={5} margin={5}>
                <Input
                    placeholder='large size'
                    size='lg'
                    value={title || ""}
                    onChange={(e) => {
                        setTicket({
                            ...ticket,
                            title: e.target.value
                        })
                    }}
                />

                <Textarea
                    placeholder='Here is a sample placeholder'
                    value={description || ""}
                    onChange={(e) => {
                        setTicket({
                            ...ticket,
                            description: e.target.value
                        })
                    }}
                />
                <Select
                    placeholder='Assignee'
                    value={assignee || ""}
                    onChange={(e) => {
                        setTicket({
                            ...ticket,
                            assignee: e.target.value
                        })
                    }}
                >
                    <option value='Shrikant'>Shrikant</option>
                    <option value='Ashmita'> Ashmita</option>
                    <option value='Tamanna'>Tamanna</option>
                    <option value='Amrit'>Amrit</option>
                    <option value='Abhishak'>Abhishak</option>
                </Select>
                <Select
                    placeholder='Status'
                    value={status || ""}
                    onChange={(e) => {
                        setTicket({
                            ...ticket,
                            status: e.target.value
                        })
                    }}
                >
                    <option value='pending'>Pending</option>
                    <option value='process'>Process</option>
                    <option value='completed'>Completed</option>
                </Select>
                <Select
                    placeholder='Priority'
                    value={priority || 0}
                    onChange={(e) => {
                        setTicket({
                            ...ticket,
                            priority: Number(e.target.value)
                        })
                    }}
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </Select>
                <Button variant={'outline'} colorScheme="red" onClick={editTicket}>Edit Ticket</Button>
            </VStack>
        </Container>
    )
}
