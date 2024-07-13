"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import Image from "next/image";
import ToDoIcon from "/public/list-edit.svg";
import ToDoItems from "../TodoItems";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
      }
    }
  }, []);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prvTodo) => {
      return prvTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Box
      background="#fff"
      placeSelf="center"
      width="450px"
      height="500px"
      display="flex"
      flexDirection="column"
      padding="16px"
      borderRadius="25px"
    >
      <Box display="flex" alignItems="center" margin="15px 0" gap="15px">
        <Box width="20px" height="100%" position="relative" textAlign="center">
          <Image fill src={ToDoIcon} alt="list" />
        </Box>
        <Heading as="h1" margin="0">
          To-Do List
        </Heading>
      </Box>

      <Flex
        width="100%"
        alignItems="center"
        borderRadius="30px"
        bg="#c0c0c0"
        m="15px 0"
        height="35px"
      >
        <Input
          ref={inputRef}
          fontWeight="400"
          background="transparent"
          border="none"
          flex="1"
          padding="0 8px"
          variant="unstyled"
          fontSize="12px"
          color="#fff"
          _placeholder={{ color: "#fff" }}
          placeholder="Add your task"
        />
        <Button
          onClick={add}
          width="100px"
          color="#fff"
          fontWeight="600"
          border="none"
          height="100%"
          _hover={{ background: "#ff6700" }}
          background="orange"
          borderRadius="30px"
          fontSize="14px"
        >
          ADD +
        </Button>
      </Flex>

      <Box width="100%">
        {todoList.map((item, index) => {
          return (
            <ToDoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ToDo;
