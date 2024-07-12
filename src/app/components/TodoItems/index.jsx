import { Box, Flex, Text, textDecoration } from "@chakra-ui/react";
import Image from "next/image";

import Tick from "/public/tick.svg";
import EmptyTick from "/public/not-tick.svg";
import DeleteIcon from "/public/delete-icon.svg";

const ToDoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <>
      <Flex
        alignItems="center"
        width="100%"
        m="5px 0"
        gap="15px"
        cursor="pointer"
        onClick={() => {
          toggle(id);
        }}
      >
        <Box position="relative" width="30px" height="30px">
          <Image fill src={isComplete ? Tick : EmptyTick} alt="tick" />
        </Box>
        <Box>
          <Text
            as="span"
            fontWeight="400"
            fontSize="16px"
            textDecoration={isComplete ? "line-through" : "none"}
          >
            {text}
          </Text>
        </Box>

        <Box position="relative" width="20px" height="20px" marginLeft="auto">
          <Image
            onClick={() => {
              deleteTodo(id);
            }}
            src={DeleteIcon}
            alt="Icon"
            fill
          />
        </Box>
      </Flex>
    </>
  );
};

export default ToDoItems;
