import Header from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps, navItems }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
