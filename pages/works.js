import Layout from "../components/layouts/main";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AnimatedSection from "../components/animatedSection";
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const WorkCard = ({ name, link, img, extra, ...rest }) => {
  return (
    <Box
      _hover={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
      background={extra ? "#f5cb5c" : "none"}
    >
      <Link href={link} target="_blank">
        <Box padding={"10px"} borderRadius={"10px"}>
          <img src={`/works/${img}.png`} className="work-img"></img>
          <Text color={ extra?"#333533":"#e8eddf"}>{name}</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default function works() {
  return (
    <AnimatedSection
      style={{
        backgroundColor: "transparent",
        color: "#e8eddf",
      }}
    >
      <VStack width={{ base:"80vw",md:"50vw"}}>
        {" "}
        <Text fontSize={"30px"} fontWeight={500}>
          My works
        </Text>
        <SimpleGrid columns={{base:1, md:2}} width={"100%"} spacing={3}>
          <WorkCard
            name="LOT Foundation Website"
            img="lotweb"
            link="https://www.laughouttogether.org"
          ></WorkCard>
          <WorkCard
            name="Anydoro"
            img="anydoro"
            link="https://anydoro.netlify.app"
          ></WorkCard>
          <WorkCard
            name="4K Weeks"
            img="4kweeks"
            link="https://4kweeks-mu.vercel.app"
          ></WorkCard>
          <WorkCard
            name="Beat"
            img="beat"
            link="https://beattt.netlify.app/"
          ></WorkCard>
          <WorkCard
            name="HolySheet"
            img="sheet"
            link="https://holy-sheet.vercel.app"
          ></WorkCard>
          <WorkCard
            name="SigmaChat"
            img="sigchat"
            link="https://sigmachat.vercel.app"
          ></WorkCard>
          <WorkCard
            name="Lettis"
            img="lettis"
            link="https://lettis.vercel.app"
          ></WorkCard>

          <WorkCard
            name="ClockTab"
            img="clock"
            link="https://clock-tab.netlify.app"
          ></WorkCard>
          <WorkCard
            extra={true}
            name="EquilibriNews"
            img="news"
            link="https://eqnews.herokuapp.com"
          ></WorkCard>
        </SimpleGrid>
      </VStack>
    </AnimatedSection>
  );
}
