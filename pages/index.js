import Layout from "../components/layouts/main";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AnimatedSection from "../components/animatedSection";
import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
export default function Home() {
  return (
    <AnimatedSection
      style={{ backgroundColor: "transparent", color: "#e8eddf" }}
    >
      <Center bg={"#242423"} borderRadius="md" m={3}>
        <Box color={"#e8eddf"} fontSize={"17px"} padding={"3"}>
          Hello, I am a high school student in Southern California, welcome to
          my page!
        </Box>
      </Center>

      <Center margin={"0 10px"} flexDirection={{ base:"column", md:"row"}}>
        <Image
          src="me.png"
          maxWidth={"200px"}
          borderRadius={"full"}
          border={"3px solid #242423"}
        />

        <VStack justify={"flex-start"} >
          <Box ml="5" width={{base:"100%",xl:"auto"}}>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              Dennis Wang
            </Text>
            <Text fontSize={"20px"}>Likes to learn new things &#128526;</Text>
            <Text>(Currently Web Dev)</Text>
          </Box>
        </VStack>
      </Center>

      <Center width={"60%"}>
        <VStack align={"end"} justify={"center"}>
          <Text textDecoration={"underline 4px"} className="miniheader">
            About
          </Text>
          <Text fontSize={"18px"} textAlign={"right"}>
            Dennis is a high school student in Southern California, US. He has a
            passion for anything related to web development, tennis, and
            finances. In real life, Dennis can be found studying, working for
            his nonprofit organization, or playing tennis. He currently does not
            have a job but wouldn't mind getting one for some startup company ;)
          </Text>
        </VStack>
      </Center>
    </AnimatedSection>
  );
}
