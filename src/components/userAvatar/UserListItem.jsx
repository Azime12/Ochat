import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ handleFunction ,Upicture,Uname,UphoneNumber}) => {
  const { user } = ChatState();

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        Uname={Uname}
        src={Upicture}
        UphoneNumber={user.phoneNumber}
      />
      <Box>
        <Text>{Uname}</Text>
        <Text fontSize="xs">
          
          {UphoneNumber}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
