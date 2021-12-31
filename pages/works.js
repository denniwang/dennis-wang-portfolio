



import Layout from '../components/layouts/main';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AnimatedSection from '../components/animatedSection' 
import { Box, Center, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const WorkCard = ({ name, link, img, ...rest }) => {
  return (
    <Link href={link} target="_blank">
    <Box padding={"10px"} borderRadius={"10px"}>
      <img src={`/works/${img}.png`} borderRadius="10px"></img>
      <Text>{name}</Text>
      </Box>
</Link>

  )

}

export default function works() {
  return (
    <AnimatedSection style={{ backgroundColor :  "transparent", color:"#e8eddf" , width:"80vw"}} >
      <VStack width={"50vw"}> <Text fontSize={"30px"} fontWeight={500}>My works</Text> 
        <SimpleGrid columns={2} width={"100%"}>
        <WorkCard name="LOT Foundation Website" img="lotweb" link="https://www.laughouttogether.org"></WorkCard>
        <WorkCard name="Anydoro" img="anydoro" link="https://anydoro.netlify.app"></WorkCard>
        <WorkCard name="Beat" img="beat" link="https://beattt.netlify.app/"></WorkCard>
        
        
          </SimpleGrid> 
          
          </VStack>
    
    </AnimatedSection> 

    )
}
