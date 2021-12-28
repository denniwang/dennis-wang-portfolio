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
  return (<>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dennis Wang - portfolio" />
        <meta name="author" content="Dennis Wang" />
        <link rel="shortcut icon" href="/cat.png" type="image/x-icon" />
        <meta property="og:site_name" content="Dennis Want - portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/cat.png" />
        <title>Dennis Wang - portfolio</title>
      </Head>
    <Center style={{ border: "0" }} flexDirection={"column"}>
      <AnimatePresence>
        <Nav path={router?.pathname} />

        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 1, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {children}
        </motion.div>
        <Footer />
      </AnimatePresence>
    </Center>
</>
  );
}
