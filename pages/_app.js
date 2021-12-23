import "../styles/globals.css";

import Layout from "../components/layouts/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps, router }) {
  const rtr = useRouter();
  return (

    <Layout router={rtr}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
