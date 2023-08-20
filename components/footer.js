import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Page({}) {
  return (
    <Center mb="30px">
      <VStack
      width={{ base: '100%', md: '60%', xl: '40%' }} // Adjust width for different screen sizes
      marginTop={{ base: '10px', md: '20px' }} // Adjust margin for different screen sizes
      align={{ base: 'center', md: 'start' }} // Center items on small screens, align to start on medium and larger screens
      justify="center"
      fontSize={{ base: '16px', md: '20px' }} // Adjust font size for different screen sizes
      maxW="750px"
      >
        <Text
          textDecoration={"underline 4px #f5cb5c"}
          className="miniheader"
          marginBottom={"4"}
        >
          @
        </Text>

        <HStack>
          <FaGithub />
          <Text>hellolol2016</Text>

        </HStack>

        <HStack>
          <FaInstagram />
          <Text>@wennis_dang</Text>
        </HStack>
        <HStack>
          <FaLinkedin />
          <Text>denniswang812</Text>
        </HStack>
        <HStack
          fontSize={"14px"}
          alignContent={"center"}
          alignSelf="center"
          pt="30px"
        >
          <Text whiteSpace={"nowrap"}> Made with</Text>
          <svg
            viewBox="0 0 1792 1792"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "24px" }}
          >
            <path
              d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
              fill="#e25555"
            ></path>
          </svg>
          <Text> using React and NextJS </Text>
        </HStack>
      </VStack>
    </Center>
  );
}
