import Layout from "../components/layouts/main";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AnimatedSection from "../components/animatedSection";
import {
  Box,
  Button,
  Center,
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
        <Center bg={"#242423"} borderRadius="md" m={3}>
          <Box
            color={"#e8eddf"}
            fontSize={"17px"}
            padding={"3"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            Hello, I am a high school student in Southern California, welcome to
            my page!
          </Box>
        </Center>

        <Center margin={"0 10px"} flexDirection={{ base: "column", md: "row" }}>
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
              <Text>(Currently Web Dev)</Text>
            </Box>
          </VStack>
        </Center>

        <Center
          width={{ base: "70%", xl: "40%" }}
          style={{ marginTop: "20px" }}
        >
          <VStack align={"end"} justify={"center"}>
            <Text
              textDecoration={"underline 4px  #f5cb5c"}
              className="miniheader"
            >
              About
            </Text>
            <Text fontSize={"18px"} textAlign={"right"}>
              Dennis is a high school student in Southern California, US. He has
              a passion for anything related to web development, tennis, and
              finances. In real life, Dennis can be found studying, working for
              his nonprofit organization, or playing tennis. He currently does
              not have a job but wouldn&apos;t mind working for some startup
              company ;)
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
            <>
              My works <Box width={"10px"}></Box>
              <FaArrowRight />
            </>
          </Link>
        </Button>

        <Center
          width={{ base: "70%", xl: "80%" }}
          style={{ marginTop: "20px" }}
        >
          <VStack align={"end"} justify={"center"}>
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
            <Timeslot year={"2019 - present"}>
              {" "}
              First year of High School. Got interested in typing lines to tell
              a computer to do stuff
            </Timeslot>
          </VStack>
        </Center>

        <Center
          width={{ base: "70%", xl: "80%" }}
          style={{ marginTop: "40px" }}
        >
          <VStack align={"end"} justify={"center"}>
            <Text
              textDecoration={"underline 4px #f5cb5c"}
              color={"#f5cb5c"}
              className="miniheader"
              marginBottom={"4"}
            >
              <FaHeart></FaHeart>
            </Text>
            <Text fontSize={"20"} textAlign={"right"}>
              Tennis, graphic design,{" "}
              <Link href={"https://www.laughouttogether.org"}>
                nonprofit work
              </Link>
              , leadership, learning, reading, you
            </Text>
          </VStack>
        </Center>

        <Center
          width={{ base: "70%", xl: "80%" }}
          style={{ marginTop: "50px", marginBottom: "100px" }}
        >
          <VStack
            align={"end"}
            justify={"center"}
            width={"100%"}
            fontSize={"20px"}
          >
            <Text
              textDecoration={"underline 4px #f5cb5c"}
              className="miniheader"
              marginBottom={"4"}
            >
              @
            </Text>

            <HStack>
              <Text>hellolol2016</Text>

              <FaGithub />
            </HStack>

            <HStack>
              <Text>@wennis_dang</Text>
              <FaInstagram />
            </HStack>
            <HStack>
              <Text>denniswang812</Text>
              <FaLinkedin />
            </HStack>
          </VStack>
        </Center>
      </AnimatedSection>
    </>
  );
}
