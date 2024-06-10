import { CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, Icon, Text } from "@chakra-ui/react";
import { TbDots } from "react-icons/tb";
import { useCopyText } from "../Utils/copyText";

interface PasswordOutputsProps {
  passwordStrings: string[];
  passwordGenerated: boolean;
}

const PasswordOutputs: React.FC<PasswordOutputsProps> = ({
  passwordStrings,
  passwordGenerated,
}) => {
  const textBoxes = [];
  for (let i = 0; i < 4; i++) {
    textBoxes.push(
      <div>
        {!passwordGenerated ? (
          <Box
            backgroundColor={"#4B5563"}
            h={"50px"}
            w="250px"
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            key={`password-${i}`}
          >
            <Icon as={TbDots} />
          </Box>
        ) : (
          <Button h="50px" w="250px" onClick={useCopyText(passwordStrings[i])}>
            <CopyIcon m={"10px"} />
            <Text>{passwordStrings[i]}</Text>
          </Button>
        )}
      </div>
    );
  }
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 4fr)", md: "repeat(2, 2fr)" }}
      gap={6}
    >
      {textBoxes}
    </Grid>
  );
};

export default PasswordOutputs;
