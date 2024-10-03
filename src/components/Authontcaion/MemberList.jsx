import {useState,useEffect,React} from 'react'
import {
	Table,
	Thead,
	Tbody,
	// Tfoot,
	Tr,
	Th,
	Td,
	// TableCaption,
	TableContainer,
  Button
  } from '@chakra-ui/react'
  import axios from 'axios'
  import { ChatState } from '../../Context/ChatProvider';
  import { Spinner } from '@chakra-ui/react';
  // import { useNavigate } from 'react-router-dom';
  // import ChatLoading from '../ChatLoading';
  import EditModal from './EditModal';
  
const MemberList =  () => {
const {user}=ChatState();
// const toast=useToast()
const [loading, setLoading] = useState(true)
const [memberList, setMemberList] = useState();
// const navigate=useNavigate();
const demember = async (_id,e) => {
  e.preventDefault();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  setLoading(true);
  console.log(_id);
  const { data } = await axios.post(
    "http://localhost:5000/api/user/delete",
    {
      _id,
      
    },
    config
  );

 console.log(data);

const response = await  axios(
    'http://localhost:5000/api/user/memberr',config
  );
  console.log(response);
  setMemberList(response.data)
  setLoading(false);
    
 } 
// return (<button >Rate 1</button>);


useEffect(() => {
  console.log("token of user :",user.token);
 try{
  async function fetchData() {
    // You can await here
   
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      
    const response = await  axios(
          'http://localhost:5000/api/user/member',config
        );
        console.log(response);
        setMemberList(response.data)
        setLoading(false)
  }
  fetchData();
  
 }catch(errr){
  console.log(errr)
 }
}, []);

  return (
	<TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        
        <Th>Name</Th>
        <Th>PhoneNumber</Th>
        <Th>Status</Th>
        
      </Tr>
    </Thead>
    <Tbody>
{(loading) ? (
<Spinner justityContent={"center"}/>
) :  ( memberList.map(member =>
<Tr key={member._id}>

<Td>{member.name}</Td>
<Td>{member.phoneNumber}</Td>
<Td>{member.responsiblity}</Td>
<Td><Button onClick={(e) => demember(member._id,e)}>Delete</Button></Td>
<Td><EditModal name={member.name} responsiblity={member.responsiblity} phoneNumber={member.phoneNumber} id={member._id} /></Td>
</Tr>

))}
      
 
   
      
        
      
       
     
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default MemberList
