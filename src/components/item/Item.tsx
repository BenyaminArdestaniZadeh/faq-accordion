import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

type ItemProps = {
  question: string;
  answer: string;
};

const Item = (props: ItemProps) => {
  const { question, answer } = props;

  const [isTrigger, setIsTrigger] = useState<boolean>(false);
  const buttonHandler = () => {
    setIsTrigger(!isTrigger);
    console.log(question);
  };

  return (
    <Flex
      direction={"column"}
      justify={"start"}
      align={"stretch"}
      gap={"4"}
      px={"5"}
      py={"2"}
      className="item-style"
    >
      <Flex justify={"between"} align={"center"}>
        <Text size={"4"} weight={"bold"}>
          {question}
        </Text>
        <Button
          variant="solid"
          size={"2"}
          style={{ cursor: "pointer" }}
          onClick={() => buttonHandler()}
        >
          <Text weight={"bold"} size={"4"}>
            {!isTrigger ? "+" : "-"}
          </Text>
        </Button>
      </Flex>
      {isTrigger && (
        <Flex>
          <Text size={"4"}>{answer}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Item;
