import { Box, Flex, Heading } from "@radix-ui/themes";
import { ItemsData } from "./components/data";
import Item from "./components/item/Item";

function App() {
  return (
    <Box>
      <Flex direction={"column"} gap={"7"}>
        <Flex justify={"center"} mb={"5"}>
          <Heading>FAQ Accordion</Heading>
        </Flex>
        {ItemsData.map((item, index) => (
          <Item key={index} question={item.question} answer={item.answer} />
        ))}
      </Flex>
    </Box>
  );
}

export default App;
