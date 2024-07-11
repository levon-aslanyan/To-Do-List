import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import Tick from "/public/tick.svg";
import DeleteIcon from "/public/delete-icon.svg";

const ToDoItems = ({ text }) => {
  return (
    <>
      <Flex
        alignItems="center"
        width="100%"
        m="5px 0"
        gap="5px"
        cursor="pointer"
      >
        <Box position="relative" width="30px" height="30px">
          <Image fill src={Tick} alt="tick" />
        </Box>
        <Box>
          <Text as="span">{text}</Text>
        </Box>

        <Box position="relative" width="20px" height="20px" marginLeft="auto">
          <Image src={DeleteIcon} alt="Icon" fill />
        </Box>
      </Flex>
    </>
  );
};

export default ToDoItems;
