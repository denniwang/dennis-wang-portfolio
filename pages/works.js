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

const works = [
  { name: "EquilibriNews", img: "new", link: "https://equilibri-news.vercel.app",extra:true },
  { name: "teXnology", img: "tex", link: "https://github.com/hellolol2016/teXnology",extra:true },
  { name: "LOT Foundation Website", img: "lotweb", link: "https://www.laughouttogether.org",extra:false },
  { name: "Anydoro", img: "anydoro", link: "https://anydoro.netlify.app",extra:false },
  { name: "4K Weeks", img: "4kweeks", link: "https://4kweeks-mu.vercel.app",extra:false },
  { name: "Beat", img: "beat", link: "https://beattt.netlify.app/",extra:false },
  { name: "HolySheet", img: "sheet", link: "https://holy-sheet.vercel.app",extra:false },
  { name: "SigmaChat", img: "sigchat", link: "https://sigmachat.vercel.app",extra:false },
  { name: "Lettis", img: "lettis", link: "https://lettis.vercel.app",extra:false },
  { name: "ClockTab", img: "clock", link: "https://clock-tab.netlify.app",extra:false },
]

export default function WorksPage() {
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
          {works.map((work) => (
            <WorkCard {...work} key={work.name} />
          ))}
        </SimpleGrid>
      </VStack>
    </AnimatedSection>
  );
}
