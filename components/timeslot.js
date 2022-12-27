import { Box, HStack, Spacer } from "@chakra-ui/react";

export default function Page({ year, children, ...rest }) {
  return (
    <HStack {...rest} marginTop={9} flexWrap="space-between" width="100%">
      <Box fontSize={"18px"} textAlign={"left"} width={"auto"}>
        {children}
      </Box>{" "}
      <Spacer></Spacer>
      <Box
        background={"#242423"}
        padding={"3px 10px"}
        fontSize={"20px"}
        fontWeight={"500"}
        borderRadius={5}

      >
        {year}
      </Box>
    </HStack>
  );
}
