import { useToast } from "@chakra-ui/react";

export const useCopyText = (textValue: string) => {
  const toast = useToast();

  const copyText = () => {
    navigator.clipboard.writeText(textValue);
    toast({
      title: "Password copied!",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return copyText;
};
