import Header from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, navItems }) {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
