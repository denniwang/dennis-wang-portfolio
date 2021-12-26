import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import theme from '../lib/theme'
function MyApp({ Component, pageProps, router }) {
  const rtr = useRouter();
  return (
<ChakraProvider theme={theme}> 
    <Layout router={rtr}>
      <Component {...pageProps} />
      </Layout>
      

</ChakraProvider>
  );
}

export default MyApp;
