import { Container,Input ,Textarea,Select, VStack,Button} from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function TicketCreate(){
    const navigate=useNavigate();
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [assignedTo,setAssignedTo]=useState("");
    const [status,setStatus]=useState("");
    const [priority,setPriority]=useState("");

    async function handleCreate(){
   try {
    const newTicket={
        title:title,
        description:description,
        assignedTo:assignedTo,
        status:status,
        priority:priority,
    }
    let res= await axios({
        method:"POST",
        url:"http://localhost:3000/tickets",
        data:newTicket
    })
    if(res.status===201){
        navigate('/tickets')
    }
   } catch (error) {
    console.log(error)
   }
    }


    return (
       <Container>
        <VStack spacing={5} margin={5}>
          <Input placeholder='large size' size='lg' value={title} onChange={(e)=>{setTitle(e.target.value)}} />

          <Textarea placeholder='Here is a sample placeholder'value={description} onChange={(e)=>{setDescription(e.target.value)}} />
          <Select placeholder='Assignee' value={assignedTo} onChange={(e)=>{setAssignedTo(e.target.value)}}>
  <option value='Shrikant'>Shrikant</option>
  <option value='Ashmita'> Ashmita</option>
  <option value='Tamanna'>Tamanna</option>
  <option value='Amrit'>Amrit</option>
  <option value='Abhishak'>Abhishak</option>
</Select>
<Select placeholder='Status' value={status} onChange={(e)=>{setStatus(e.target.value)}}>
  <option value='pending'>Pending</option>
  <option value='process'>Process</option>
  <option value='completed'>Completed</option>
</Select>
<Select placeholder='Priority' value={priority} onChange={(e)=>{setPriority(Number(e.target.value))}}>
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
<Button variant={'outline'} colorScheme="red" onClick={handleCreate}>Create TIcket</Button>
          </VStack>
       </Container>
    )
}