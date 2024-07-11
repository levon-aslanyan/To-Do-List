import { Box, ChakraProvider } from "@chakra-ui/react";
import ToDo from "./components/Todo";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box display="grid" fontWeight="900" background='#06141b' maxWidth='100%' height='100vh'>
          <ToDo />
        </Box>
      </ChakraProvider>
    </>
  );
}
