import { useState } from "react";

import { Box } from "@chakra-ui/react";
import Heading from "./Components/Heading";
import PasswordOutputs from "./Components/PasswordOutputs";

function App() {
  const [passwordStrings, setPasswordStrings] = useState<string[]>([]);
  const [passwordGenerated, setPasswordGenerated] = useState(false);

  return (
    <Box
      h={"100vh"}
      minW={"100vw"}
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      backgroundColor={"#374151"}
    >
      <Heading
        passwordStrings={passwordStrings}
        setPasswordStrings={setPasswordStrings}
        setPasswordGenerated={setPasswordGenerated}
      />
      <PasswordOutputs
        passwordStrings={passwordStrings}
        passwordGenerated={passwordGenerated}
      />
    </Box>
  );
}

export default App;
