import Head from "next/head";
import { Box, Center } from "@chakra-ui/react";
import Nav from "../nav";
import Footer from "../footer";
import { motion, AnimatePresence } from "framer-motion";
export default function Main({ children, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <Center style={{ border: "0" }} flexDirection={"column"}>
      <AnimatePresence>
        <Nav path={router?.pathname} />

        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {children}
        </motion.div>
        <Footer />
      </AnimatePresence>
    </Center>
  );
}
