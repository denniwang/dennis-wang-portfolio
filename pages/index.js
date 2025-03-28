import Layout from "../components/layouts/main";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AnimatedSection from "../components/animatedSection";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  textDecoration,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaArrowRight,
  FaDiscord,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Timeslot from "../components/timeslot";

export default function Home() {
  return (
    <>
      <AnimatedSection
        style={{ backgroundColor: "transparent", color: "#e8eddf" }}
        delay={0}
      >
        <Center
          bg={"#242423"}
          borderRadius="md"
          m={3}
          width={{ base: "60%", xl: "40%" }}
          style={{ marginTop: "20px" }}
          minWidth="300px"
          maxW="750px"
        >
          <Box
            color={"#e8eddf"}
            fontSize={"17px"}
            padding={"3"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            Hello, I am a 2nd year CS + Business major at Northeastern
            University, welcome to my page!
          </Box>
        </Center>

        <Center flexDirection={{ base: "column", md: "row" }}>
          <Image
            src="profile.png"
            maxWidth={"200px"}
            borderRadius={"full"}
            border={"3px solid #242423"}
            alt="dennis"
          />

          <VStack justify={"flex-start"}>
            <Box ml="5" width={{ base: "100%", xl: "auto" }}>
              <Text fontSize={"24px"} fontWeight={"bold"}>
                Dennis Wang
              </Text>
              <Text fontSize={"20px"}>Likes to learn new things &#128526;</Text>
            </Box>
          </VStack>
        </Center>

        <Center
          width={{ base: "60%", xl: "40%" }}
          style={{ marginTop: "20px" }}
          minWidth="500px"
          maxWidth="750px"
        >
          <VStack
            align={"start"}
            justify={"center"}
            width={{ base: "60%", xl: "100%" }}
            minWidth="300px"
          >
            <Text
              textDecoration={"underline 4px  #f5cb5c"}
              className="miniheader"
            >
              About
            </Text>
            <Text fontSize={{ base: "12px", xl: "16px" }} textAlign={"left"}>
              Hi! My name is Dennis Wang, and I am a 2nd year CS + Business
              major at Northeastern University. I am passionate about building
              impactful software. I love to learn new things and explore
              different fields. In my free time, I enjoy playing tennis,
              hackathons, and working on personal projects.
            </Text>
          </VStack>
        </Center>
      </AnimatedSection>
      <AnimatedSection delay={0.5} width={"100%"}>
        <Button
          style={{
            backgroundColor: "#f5cb5c",
            color: "#333533",
            marginTop: "30px",
          }}
        >
          <Link href="/works">
            <Flex flex={"row"} justify={"center"} align={"center"}>
              My works <Box width={"10px"}></Box>
              <FaArrowRight />
            </Flex>
          </Link>
        </Button>

        <Center
          width={{ base: "60%", xl: "40%" }}
          style={{ marginTop: "20px" }}
          minWidth="500px"
        >
          <VStack
            align={"start"}
            justify={"center"}
            width={{ base: "60%", xl: "100%" }}
            minWidth="300px"
            style={{ marginTop: "20px" }}
          >
            <Text
              textDecoration={"underline 4px #f5cb5c"}
              className="miniheader"
              marginBottom={"4"}
            >
              Bio
            </Text>

            <Timeslot year={"2005"}>Born in Wuhan, China</Timeslot>

            <Timeslot year={"2012"}>Moved to the United States</Timeslot>

            <Timeslot year={"2016"}>
              Built a computer for the first time
            </Timeslot>
            <Timeslot year={"2020"}>
              Founded the Laugh Out Together Foundation{" "}
            </Timeslot>
            <Timeslot year={"2023"}>
              Started studying at Northeastern University
            </Timeslot>
          </VStack>
        </Center>

        <Center
          width={{ base: "70%", xl: "80%" }}
          style={{ marginTop: "40px" }}
        >
          <VStack
            align={"start"}
            justify={"center"}
            width={{ base: "60%", xl: "100%" }}
            minWidth="300px"
          >
            <Text
              textDecoration={"underline 4px #f5cb5c"}
              color={"#f5cb5c"}
              className="miniheader"
              marginBottom={"4"}
            >
              <FaHeart></FaHeart>
            </Text>
            <Text fontSize={"20"} textAlign={"left"}>
              Tennis,{" "}
              <Link href={"https://www.laughouttogether.org"}>
                nonprofit work
              </Link>
              , leadership, learning, reading, skiing 
            </Text>
          </VStack>
        </Center>
      </AnimatedSection>
    </>
  );
}
