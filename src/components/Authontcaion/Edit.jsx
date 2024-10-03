import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Radio, RadioGroup } from '@chakra-ui/react'
import { VStack, Stack} from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router";
import { ChatState } from "../../Context/ChatProvider";

const Edit = ({ename,eresponsiblity,ephonenumber,eId}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [name, setName] = useState(ename);
  const [responsiblity, setIsSuperAdmin] = useState(eresponsiblity);
  const [phoneNumber, setPhoneNember] = useState(ephonenumber);
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
  const {
    user,
   
  } = ChatState();

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !phoneNumber ||!responsiblity) {
      toast({
        title: "ሁሉንም ቅጽ አልሞሉም!!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    //regular expresion
    
    if (password !== confirmpassword) {
      toast({
        title: "የይለፍ ቃሉ ተመሳሳይ አይደለም!!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    var re = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    if (!re.test(phoneNumber)) {
      toast({
        title: "እባክዎ ስልክ ቁጥር በትክክል ያስገቡ!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        
      });
      setPicLoading(false);
      return;
    }

    console.log(name, eId,phoneNumber, password,responsiblity, pic);
    try {
     
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      
      const { data } = await axios.post(
        "/api/user/update",
        {
          name,
          eId,
          phoneNumber,
          responsiblity,
          password,
          pic,
        },
         config
      );
      
      console.log(data);
      toast({
        title: "በትክክል አስተካክለዋል!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // localStorage.setItem("userInfo", JSON.stringify(data));
       setPicLoading(false);
      // history("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = ( pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Ak-chat");
      data.append("cloud_name", "dcewtbuml");
      fetch("https://api.cloudinary.com/v1_1/dcewtbuml/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "እባክዎ ምስል ያስገቡ!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>ሙሉ ስም</FormLabel>
        <Input
          placeholder="ስም"
		  value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>ስልክ ቁጥር</FormLabel>
        <Input
          type="text"
          placeholder="0910********"
		  value={phoneNumber}
          onChange={(e) => setPhoneNember(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>የይለፍ ቃል</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="የይለፍ ቃል"
            onChange={(e) => setPassword(e.target.value)}
          
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "ደብቅ" : "ተመልከት"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>የይለፍ ቃል ያረጋግጡ</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="የይለፍ ቃል ያረጋግጡ"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "ደብቅ" : "ተመልከት"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="responsibltys" isRequired>
        <FormLabel>ሀላፊነት ይምረጡ</FormLabel>
        <RadioGroup defaultValue={responsiblity} >
     <Stack spacing={5} direction='row'>
      
    <Radio colorScheme='green' value='admin' onChange={(e)=>setIsSuperAdmin(e.target.value)}>
      Admin
    </Radio>
    <Radio colorScheme='green' value='reception' onChange={(e)=>setIsSuperAdmin(e.target.value)}>
      Reception
    </Radio>
	<Radio colorScheme='green' value='Leader' onChange={(e)=>setIsSuperAdmin(e.target.value)}>
      Leader
    </Radio>
  </Stack>
 </RadioGroup>
      </FormControl>
      <FormControl id="pic">
       
        <FormLabel> የማህደር ምስል ያስጉቡ</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        አስተካክል
      </Button>
    </VStack>
  );
};

export default Edit;
