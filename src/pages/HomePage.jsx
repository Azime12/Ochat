import {
	Box,
	Container,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
  } from "@chakra-ui/react";
//   import { useEffect } from "react";
//   import { useHistory } from "react-router";
  import Login from "../components/Authontcaion/Login";
  import Signup from "../components/Authontcaion/SignUp";
  
  function Homepage() {
	;
  
	return (
	  <Container maxW="xl" centerContent justifyContent="center">
		<Box
		  display="flex"
		  justifyContent="center"
		  p={3}
		  bg="white"
		  w="100%"
		  m="40px 0 15px 0"
		  borderRadius="lg"
		  borderWidth="1px"
		>
		  <Text fontSize="2xl" fontFamily="Work sans">
		AC  መልክት መላኪያ
		  </Text>
		</Box>
		<Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
		  <Tabs isFitted variant="soft-rounded">
			{/* <TabList mb="1em">
			  <Tab width="50%">ግባ</Tab>
			 
			</TabList> */}
			<TabPanels>
			  <TabPanel>
				<Login />
			  </TabPanel>
			  {/* <TabPanel>
				<Signup />
			  </TabPanel>  */}
			 </TabPanels>
		  </Tabs>
		</Box>
	  </Container>
	);
  }
  
  export default Homepage;
  