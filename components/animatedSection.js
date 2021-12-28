

import Link from "next/link";
import { motion } from "framer-motion";
import { Center, VStack } from "@chakra-ui/react";
let easing = [0.6, -0.05, 0.01, 0.99];

export default function AnimatedSection({ title,delay,children, ...rest}) {
  return (
  
      <motion.div
        animate={{ opacity: 1 , y:0, transition:{duration:0.6, delay:delay}}}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 10.8, delay:"0"}}
      
      
      {...rest}
      className='title'>
       
      <Center>
        <VStack>
          {children} 
          </VStack>
        </Center>
        </motion.div>
        
  
    )
}