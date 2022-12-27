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
import Footer from "../components/footer"
import Timeslot from "../components/timeslot";
import AnimeDiv from "../components/animatedSection";
import { Gallery } from "react-grid-gallery";
const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];
export default function Page({}) {
  return (
    <>
      <AnimatedSection
        style={{ backgroundColor: "transparent", color: "#e8eddf" }}
        delay={0}
      >
        <Center bg={"#242423"} borderRadius="md" m={3}>
          <Gallery images={images} />
          <Box
            color={"#e8eddf"}
            fontSize={"17px"}
            padding={"3"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            More about me!
          </Box>
        </Center>

        <Center
          margin={"0 10px"}
          flexDirection={{ base: "column", md: "row" }}
          maxW="500px"
        >
          <Image
            src="smiley.jpg"
            maxWidth={"300px"}
            borderRadius={"20px"}
            border={"3px solid #242423"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            alt="smiley"
          />

          <VStack justify={"flex-start"}>
            <Box ml="5" width={{ base: "100%", xl: "auto" }}>
              <Text fontSize={"20px"}>Tyler and I in Los Angeles</Text>
            </Box>
          </VStack>
        </Center>
      </AnimatedSection>
      <AnimatedSection delay={0.5} width={"100%"} marginTop="30px">
        <Center
          margin={"0 10px"}
          flexDirection={{ base: "column", md: "row" }}
          maxW="500px"
        >
          <VStack justify={"flex-start"}>
            <Box ml="5" width={{ base: "100%", xl: "auto" }}>
              <Text fontSize={"20px"} marginRight="20px">
                My friends and I at the Homecoming football game
              </Text>
            </Box>
          </VStack>
          <Image
            src="friends2.jpg"
            maxWidth={"400px"}
            borderRadius={"full"}
            border={"3px solid #242423"}
            alt="smiley"
          />
        </Center>
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

      </AnimatedSection>
    </>
  );
}
