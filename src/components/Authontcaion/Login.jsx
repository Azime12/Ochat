import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!phoneNumber || !password) {
      toast({
        title: "ሁሉንም ቅጽ በትክክል ይሙሉ!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://chat-app-d3rl.onrender.com/api/user/login",
        { phoneNumber, password },
        config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: " ተሳክቷል ", 
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>ስልክ ቁጥር</FormLabel>
        <Input
          value={phoneNumber}
          type="number"
          placeholder="0910********"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>የይለፍ ቃል</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="የይለፍ ቃል"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "ደብቅ" : "ተመልከት"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
      ግባ
      </Button>
      <Button
        variant="solid"
        colorScheme="green"
        width="100%"
        onClick={() => {
          // setEmail("guest@example.com");
          // setPassword("123456");
        }}
      >
         የይለፍ ቃል ይቀይሩ
      </Button>
    </VStack>
  );
};

export default Login;
