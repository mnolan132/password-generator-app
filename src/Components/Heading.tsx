import { Box, Text, Divider, Button, Icon } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa6";
import React, { useEffect } from "react";
import { generateRandomString } from "../Utils/generateRandomString";

interface HeadingProps {
  passwordStrings: string[];
  setPasswordStrings: React.Dispatch<React.SetStateAction<string[]>>;
  setPasswordGenerated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Heading: React.FC<HeadingProps> = ({
  passwordStrings,
  setPasswordStrings,
  setPasswordGenerated,
}) => {
  const generatePasswords = () => {
    const newPasswords: string[] = [];
    for (let i = 0; i < 4; i++) {
      newPasswords.push(generateRandomString(14));
    }
    setPasswordStrings(newPasswords);
    setPasswordGenerated(true);
  };

  useEffect(() => {
    console.log(passwordStrings);
  }, [passwordStrings]);

  return (
    <Box
      textAlign={"left"}
      width={{ base: "300px", md: "600px" }}
      lineHeight={{ base: 7, md: 9 }}
      m={{ base: "20px", md: "50px" }}
    >
      <Text
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        fontWeight={"700"}
        color={"#F9FAFB"}
      >
        Generate a
      </Text>
      <Text
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        fontWeight={"800"}
        color={"#34D399"}
      >
        random password
      </Text>
      <Text color={"#E5E7EB"}>Never use an insecure password again.</Text>
      <Button
        leftIcon={<Icon as={FaBolt} />}
        backgroundColor={"#34D399"}
        color={"#F9FAFB"}
        fontSize={"xl"}
        fontWeight={"600"}
        textShadow={"3px"}
        onClick={generatePasswords}
      >
        Generate passwords
      </Button>
      <Divider my="30px" />
    </Box>
  );
};

export default Heading;
